import React from "react";
import { Spinner } from "../components";
import useFetch from "./useFetch";

export default function PSearch(props) {
  const persons = useFetch(`http://localhost:9010/api/persons?search=${props.searchPhrase}`);

  if (!persons) {
    return <Spinner />;
  }

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
