import React from "react";
import { demo_fetch } from "../components/demo-help";

export default function useFetch(url) {
  const [searchResult, setSearchResult] = React.useState();

  React.useEffect(
    () => {
      async function loadData(url) {
        const res = await demo_fetch(url);
        const result = await res.json();
        setSearchResult(result);
      }
      loadData(url);
    },
    [url]
  );

  return searchResult;
}
