import React from "react";
import { PersonsResource } from "./resources";

export default function PSearch(props) {
  const persons = PersonsResource.read(props.searchPhrase);

  return (
    <div className="SearchResult">
      <h2>Persons</h2>
      <ul>
        {persons.map((p, ix) => (
          <li key={ix}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
