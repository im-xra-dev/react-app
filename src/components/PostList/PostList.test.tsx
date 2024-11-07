import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { PostList } from './PostList';
import { PostData, PostListProps, PostListViews, TimelineState } from './types';
import {
  newStateFromTObj,
  newTimelineState,
} from '../../hooks/TimelineHook/interface';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

//Test case postlist home
test('PostList home feed flow initialize->scroll load->scroll error', async () => {
  const mockRef = initialize('home');
  await runTests(mockRef);
});

//Test case postlist subsection
test('PostList subsection feed flow initialize->scroll load->scroll error', async () => {
  const mockRef = initialize('s', { id: 'mockValue' });
  await runTests(mockRef);
});

//Test case postlist profile
test('PostList profile feed flow initialize->scroll load->scroll error', async () => {
  const mockRef = initialize('profile', { id: 'mockValue' });
  await runTests(mockRef);
});

/**Initialize the PostLists mock API and router/renderer
 *
 * @param view
 */
function initialize(
  view: PostListViews,
  options?: PostListProps,
): { _: TimelineState } {
  //sets up some mock data reference
  const mockRef: { _: TimelineState } = { _: newTimelineState(view, options) };
  mockRef._.data.push(generateDummyPost(0));

  //render the PostList in a new memory router
  render(
    <MemoryRouter>
      <Routes>
        <Route
          index
          element={<PostList id={view} options={options} mock={mockRef} />}
        />
      </Routes>
    </MemoryRouter>,
  );

  return mockRef;
}

/**Runs the full test flow
 *
 * page loads with status "loading"
 * API returns data; content rendered
 * status is cleared
 * > user scrolls
 * status updates to "loading" more
 * API returns data; content rendered
 * status is cleared
 * > user scrolls
 * status updates to "loading" more
 * API returns error; content rendered
 * status messages updates to signal an "error"
 *
 * @param mockRef
 */
async function runTests(mockRef: { _: TimelineState }) {
  const tObj = mockRef._.object;

  //on initial load, status should say "loading..."
  //on initial API callback, status should cleared and Mock post 0 should be rendered
  await validateTimelineAction([0]);

  //update the mock API to return post 1
  mockRef._ = newStateFromTObj(tObj);
  mockRef._.data.push(generateDummyPost(1));
  //user scroll; should now render posts 0 and 1
  simulateUserScrollingDownFeed();
  await validateTimelineAction([0, 1]);

  //update the mock API to return an error
  mockRef._ = newStateFromTObj(tObj);
  mockRef._.error = true;
  //user scroll; API returned error so check for that
  simulateUserScrollingDownFeed();
  await validateTimelineAction([0, 1], /error/i);
}

/** Validates the correct program flow from starting to load data to final loaded state
 *
 * @param dummyPostList
 * @param expectedStatus
 */
async function validateTimelineAction(
  dummyPostList: number[],
  expectedStatus?: RegExp,
) {
  //on scroll or initial load, status should contain "loading"
  await validateStatusText(/loading/i);

  //on API callback ensure that the previously loaded and newly loaded posts are rendered
  await validateDummyPosts(dummyPostList);

  //validate expected status text
  if (expectedStatus) await validateStatusText(expectedStatus);
  else validateNoStatusText();
}

/**Utility to take a list of IDs and validates that all are rendered
 *
 * @param ids
 */
async function validateDummyPosts(ids: number[]) {
  for (let i = 0; i < ids.length; i++)
    expect(await screen.findByText(`Mock title ${ids[i]}`)).toBeInTheDocument();
}

/**Utility to validate text of status*/
async function validateStatusText(regex: RegExp) {
  expect(await screen.findByText(regex)).toBeInTheDocument();
}

/**Utility to validate clear status state*/
function validateNoStatusText() {
  expect(screen.getByTestId('postlist-state')).toHaveTextContent('');
}

/**Utility to simulate user scroll*/
function simulateUserScrollingDownFeed() {
  fireEvent.scroll(window, { target: { scrollY: 100 } });
}

/**Utility function to create dummy posts
 *
 * @param id
 */
function generateDummyPost(id: number): PostData {
  return {
    comments: 1,
    content: `Mock content ${id}`,
    pinned: 0,
    post_id: '12345678',
    post_type: 0,
    score: 2,
    sec: 'mock',
    timestamp: new Date().toTimeString(),
    title: `Mock title ${id}`,
    user_id: '9D099CA8',
    username: 'MockUser',
    value: 0,
  };
}
