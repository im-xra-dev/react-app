import {
  PostListProps,
  PostListViews,
  TimelineState,
  tlineObj,
  tlineStructure
} from "../../components/PostList/types";
import { Dispatch, SetStateAction } from "react";
import { API_JSON_QUERY } from "../../utils/api_handler/interface";

/**Queries for the next chunk of the timeline
 * updates storage state on query complete
 *
 * @param ctx
 * @param settimelineStateData
 * @param setMessage
 */
export function queryTimelineObject(
  ctx: TimelineState,
  settimelineStateData: Dispatch<SetStateAction<TimelineState>>,
  setMessage: Dispatch<SetStateAction<String>>
): void {
  //query API then update the "loading" message and set the new state
  API_JSON_QUERY("get-posts", { timeline: true, xml: false, tObj: ctx.object })
    .then((rawData: TimelineState) => {
      rawData.data = [...ctx.data, ...rawData.data];
      setMessage(rawData.error ? "There was an error :(" : "");
      settimelineStateData(rawData);
    });
}

/**Initializes a new context of a timeline
 *
 * @param id
 * @param options
 */
export function newTimelineState(
  id: PostListViews,
  options: PostListProps
): TimelineState {
  //home route is user-customised.
  //tObj is optional and generated by servers
  if (id === "home") return newLineState(undefined);
  const tObj = newTObj();

  //route specific modifications to the tObj
  if (id === "s") tObj.secs[options.id] = newDateObj();
  else if (id === "profile") tObj.users[options.id] = newDateObj();
  else if (id === "search") console.log("search not implemented");

  //wrap it
  return newLineState(tObj);
}

//
//generate new default instances of objects\\
//
const newLineState = (tObj): TimelineState => ({
  data: [],
  error: false,
  object: tObj,
  recipeDataResolved: [],
  responseCode: -1
});
const newTObj = (): tlineObj => ({
  iter: 0,
  secs: {},
  prio_usr: [],
  reco_usr: [],
  prio_sec: [],
  reco_sec: [],
  promo: [],
  users: {}
});
const newDateObj = (): tlineStructure => ({ date: new Date().getTime() });
//-----------------------------------------\\
