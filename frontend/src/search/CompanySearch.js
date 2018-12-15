import React from "react";
import { Spinner } from "../components";
import { demo_delayFetch } from "../components/demo-help";

export default class CompanySearch extends React.Component {
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
