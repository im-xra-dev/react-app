/** API_JSON_QUERY
 *
 * Queries the CHOMP API
 * TODO This method is not to be fully implemented in this branch
 *
 * @param route
 * @param body
 * @param mock
 * @constructor
 */
export async function API_JSON_QUERY(
  route: string,
  body: ANY_OBJ,
  mock: { _: API_RESPONSE },
): Promise<API_RESPONSE> {
  if (mock) return mock._;

  //TODO from env
  const API_ROOT = 'http://localhost:8081/API';
  const requestOptions = {
    method: 'POST',
    // headers: { },
    body: JSON.stringify(body),
  };

  //TODO handle auth too

  //TODO handle mock data for testing

  try {
    const response = await fetch(`${API_ROOT}/${route}`, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}
