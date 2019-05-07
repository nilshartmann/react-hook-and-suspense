import React from "react";
import LoadingPage from "./components/LoadingPage";

import SearchPage from "./search/SearchPage";

export function App() {
  return (
    <React.Suspense fallback={<LoadingPage />} maxDuration={100}>
      <SearchPage />
    </React.Suspense>
  );
}
