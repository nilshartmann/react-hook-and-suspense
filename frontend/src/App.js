import React from "react";
import LoadingPage from "./components/LoadingPage";
import { demo_delayImport } from "./components/demo-help";

const SearchPage = React.lazy(
  //
  () =>
    demo_delayImport(
      () => import(/* webpackChunkName: "SearchPage" */ "./search/SearchPage") //
    )
);

export function App() {
  return (
    <React.Suspense fallback={<LoadingPage />} maxDuration={100}>
      <SearchPage />
    </React.Suspense>
  );
}

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
