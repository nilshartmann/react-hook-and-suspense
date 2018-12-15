import React from "react";
import { demo_delayInvocation } from "./demo-help";
import { Page } from "./components";
import SearchPage from "./SearchPage";

// React.lazy() => Code Splitting mit Suspense [16.6]
// https://reactjs.org/docs/code-splitting.html#reactlazy
// const ChatPage = React.lazy(() => demo_delayInvocation(() => import(/* webpackChunkName: "ChatPage" */ "./chat/ChatPage")));
// const DashboardPageWithEffects = React.lazy(() =>
//   demo_delayInvocation(() => import(/* webpackChunkName: "DashboardPageWithEffects" */ "./stats/DashboardPageWithEffects"))
// );
// const DashboardPageWithSuspense = React.lazy(() =>
//   demo_delayInvocation(() => import(/* webpackChunkName: "DashboardPageWithSuspense" */ "./stats/DashboardPageWithSuspense"))
// );

function LoadingPage() {
	return (
		<Layout>
			<Spinner label="Page is loading" />
		</Layout>
	);
}

export default function App() {
	return (
		<React.Suspense fallback={<LoadingPage />} maxDuration={100}>
			<Page>
				<SearchPage />
			</Page>
		</React.Suspense>
	);
}
