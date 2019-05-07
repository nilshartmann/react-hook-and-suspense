import React from "react";
import LoadingPage from "./components/LoadingPage";
import { React_lazy } from "./components/demo-help";

const SearchPage = React_lazy(() => import(/* webpackChunkName: "SearchPage" */ "./search_suspense/SearchPage"));

export function AppWithTabWithSuspense() {
  return (
    <>
      <React.Suspense fallback={<LoadingPage />} maxDuration={100}>
        <SearchPage />
      </React.Suspense>
    </>
  );
}
