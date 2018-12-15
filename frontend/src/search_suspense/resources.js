import { unstable_createResource } from "react-cache";
import { demo_delayFetch } from "../components/demo-help";

async function loadDataFromApi(url) {
  console.log("Loading from API ", url);
  const response = await fetch(url);
  const json = await response.json();

  console.log(`loadDataFromApi '${url}'`, json);
  return json;
}

export const CompaniesResource = unstable_createResource(searchPhrase =>
  demo_delayFetch(() => loadDataFromApi(`http://localhost:9010/api/companies?search=${searchPhrase}`), 350)
);

export const PersonsResource = unstable_createResource(searchPhrase =>
  demo_delayFetch(() => loadDataFromApi(`http://localhost:9010/api/persons?search=${searchPhrase}`), 350)
);
