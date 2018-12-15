import React from "react";
import { Spinner } from "./components";
import { demo_delayFetch } from "./demo-help";

class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue
		};
	}

	onKeyDown(e) {
		const keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			this.onButtonClick();
		}
	}

	onButtonClick() {
		this.props.onButtonClick(this.state.value);
	}

	onSearchChange(newValue) {
		this.setState({
			value: newValue
		});
	}

	render() {
		return (
			<div className="InputField">
				<input
					type="text"
					value={this.state.value}
					onChange={e => this.onSearchChange(e.target.value)}
					onKeyDown={e => this.onKeyDown(e)}
				/>
				<button onClick={() => this.onButtonClick()}>Search</button>
			</div>
		);
	}
}

class PersonSearch extends React.Component {
	componentDidMount() {
		this.doSearch(this.props.searchPhrase);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.searchPhrase !== this.props.searchPhrase) {
			this.doSearch(this.props.searchPhrase);
		}
	}

	async doSearch(searchPhrase) {
		this.setState({ persons: null });

		demo_delayFetch(async () => {
			const res = await fetch(`http://localhost:9010/api/persons?search=${searchPhrase}`);
			const persons = await res.json();
			this.setState({ persons });
		});
	}

	render() {
		if (!this.state || !this.state.persons) {
			return <Spinner />;
		}

		return (
			<div className="SearchResult">
				<h2>Persons</h2>
				<ul>
					{this.state.persons.map((p, ix) => (
						<li key={ix}>{p}</li>
					))}
				</ul>
			</div>
		);
	}
}

class CompanySearch extends React.Component {
	componentDidMount() {
		this.doSearch(this.props.searchPhrase);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.searchPhrase !== this.props.searchPhrase) {
			this.doSearch(this.props.searchPhrase);
		}
	}

	async doSearch(searchPhrase) {
		this.setState({ companies: null });

		demo_delayFetch(async () => {
			const res = await fetch(`http://localhost:9010/api/companies?search=${searchPhrase}`);
			const companies = await res.json();
			this.setState({ companies });
		});
	}

	render() {
		if (!this.state || !this.state.companies) {
			return <Spinner />;
		}

		return (
			<div className="SearchResult">
				<h2>Companies</h2>
				<div className="ResultTable">
					<table>
						<tbody>
							{this.state.companies.map(c => (
								<tr key={c.id}>
									<td>{c.name}</td>
									<td>{c.zipCode}</td>
									<td>{c.city}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default class SearchPage extends React.Component {
	state = { searchPhrase: "ab" };

	render() {
		return (
			<div>
				<SearchField initialValue={this.state.searchPhrase} onButtonClick={searchPhrase => this.setState({ searchPhrase })} />

				{this.state.searchPhrase && (
					<div className="SearchResults">
						<PersonSearch searchPhrase={this.state.searchPhrase} />
						<CompanySearch searchPhrase={this.state.searchPhrase} />
					</div>
				)}
			</div>
		);
	}
}
