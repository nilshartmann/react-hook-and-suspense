import React from "react";

import { demo_delayFetch } from "../components/demo-help";

export function useFetch(url) {
  const [searchResult, setSearchResult] = React.useState();

  React.useEffect(
    () => {
      demo_delayFetch(async () => {
        const res = await fetch(url);
        const result = await res.json();
        setSearchResult(result);
      });
    },
    [url]
  );

  return searchResult;
}
