import React from "react";
import LoadingPage from "./components/LoadingPage";
import { React_lazy } from "./components/demo-help";

const SearchPage = React_lazy(() => import(/* webpackChunkName: "SearchPage" */ "./search/SearchPage"));

export function AppWithTab() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button style={{ margin: "20px auto", height: "2rem" }} onClick={() => setVisible(!visible)}>
        Open Search Page
      </button>
      <React.Suspense fallback={<LoadingPage />} maxDuration={100}>
        {visible && <SearchPage />}
      </React.Suspense>
    </>
  );
}
