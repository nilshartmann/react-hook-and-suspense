import React from "react";
import LoadingPage from "./components/LoadingPage";
import { demo_delayImport } from "./components/demo-help";

const SearchPage = React.lazy(() =>
	demo_delayImport(() => import(/* webpackChunkName: "SearchPage" */ "./search_hooks/SearchPage"))
);

export default function App() {
	return (
		<React.Suspense fallback={<LoadingPage />} maxDuration={100}>
			<SearchPage />
		</React.Suspense>
	);
}
