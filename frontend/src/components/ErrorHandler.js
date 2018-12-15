import React from "react";
import { Page } from "./Page";

export default class ErrorHandler extends React.Component {
	state = {};

	static getDerivedStateFromError(error) {
		return { error };
	}

	componentDidCatch(error, info) {
		console.error("error", error);
		console.error(info.componentStack);
	}

	render() {
		const { children } = this.props;
		const { error } = this.state;

		if (error) {
			return (
				<Page>
					<h1>Ooops... An error occurred 😱</h1>
					<p>We're so sorry. Please reload the page or contact our customer service.</p>
				</Page>
			);
		}

		return children;
	}
}
