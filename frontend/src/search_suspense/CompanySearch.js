import React from "react";
import { CompaniesResource } from "./resources";

export default function CSearch(props) {
  const companies = CompaniesResource.read(props.searchPhrase);

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
