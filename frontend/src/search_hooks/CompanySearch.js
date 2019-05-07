import React from "react";
import { Spinner } from "../components";
import { demo_fetch } from "../components/demo-help";

export function useFetch(url) {
  const [searchResult, setSearchResult] = React.useState();

  React.useEffect(
    () => {
      const res = await demo_fetch(url);
      const result = await res.json();
      setSearchResult(result);
    },
    [url]
  );

  return searchResult;
}

export default function CSearch(props) {
  const companies = useFetch(`http://localhost:9010/api/companies?search=${props.searchPhrase}`);

  if (!companies) {
    return <Spinner />;
  }

  return (
    <div className="SearchResult">
      <h2>Companies</h2>
      <div className="ResultTable">
        <table>
          <tbody>
            {companies.map(c => (
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
