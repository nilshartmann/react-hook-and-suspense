import React from "react";
import SearchField from "./SearchField";
import PersonSearch from "./PersonSearch";
import CompanySearch from "./CompanySearch";
import { Page } from "../components";

export default class SearchPage extends React.Component {
  state = { searchPhrase: "ab" };

  render() {
    return (
      <Page>
        <SearchField initialValue={this.state.searchPhrase} onButtonClick={searchPhrase => this.setState({ searchPhrase })} />

        {this.state.searchPhrase && (
          <div className="SearchResults">
            <PersonSearch searchPhrase={this.state.searchPhrase} />
            <CompanySearch searchPhrase={this.state.searchPhrase} />
          </div>
        )}
      </Page>
    );
  }
}
