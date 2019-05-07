import React from "react";
import { Spinner } from "../components";
import { demo_fetch } from "../components/demo-help";

export default class PersonSearch extends React.Component {
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

    const res = await demo_fetch(`http://localhost:9010/api/persons?search=${searchPhrase}`);
    const persons = await res.json();
    this.setState({ persons });
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
