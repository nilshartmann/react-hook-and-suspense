import React from "react";
import SearchField from "./SearchField";
import PersonSearch from "./PersonSearch";
import CompanySearch from "./CompanySearch";
import { Page, Spinner } from "../components";

export default class SearchPage extends React.Component {
  state = { searchPhrase: "ab" };

  render() {
    return (
      <Page>
        <SearchField initialValue={this.state.searchPhrase} onSearch={searchPhrase => this.setState({ searchPhrase })} />

        {this.state.searchPhrase && (
          <div className="SearchResults">
            <React.Suspense fallback={<Spinner />} maxDuration={100}>
              <PersonSearch searchPhrase={this.state.searchPhrase} />
            </React.Suspense>
            <React.Suspense fallback={<Spinner />} maxDuration={100}>
              <CompanySearch searchPhrase={this.state.searchPhrase} />
            </React.Suspense>
          </div>
        )}
      </Page>
    );
  }
}
