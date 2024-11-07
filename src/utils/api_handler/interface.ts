/** API_JSON_QUERY
 *
 * Queries the CHOMP API
 * This method is not to be fully implemented in this branch
 *
 * @param route
 * @param body
 * @constructor
 */
import { TimelineState } from "../../components/PostList/types";

export async function API_JSON_QUERY(route, body) {
  //TODO from env
  const API_ROOT = "http://localhost:8081/API";
  const requestOptions = {
    method: "POST",
    // headers: { 'Content-Type': 'application/jzson' },
    body: JSON.stringify(body)
  };

  //TODO handle auth too

  try {
    const response = await fetch(`${API_ROOT}/${route}`, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}
