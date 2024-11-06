export async function API_JSON_QUERY(route, body) {
  const API_ROOT = "http://localhost:8081/API";
  const requestOptions = {
    method: "POST",
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  //TODO API interface
  // I want to make handle auth too

  const response = await fetch(`${API_ROOT}/${route}`, requestOptions);
  return await response.json()
}