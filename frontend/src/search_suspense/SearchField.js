import React from "react";

export default function SearchField(props) {
  const [inputValue, setInputValue] = React.useState(props.initialValue);

  function onKeyDown(e) {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      props.onSearch(inputValue);
    }
  }

  return (
    <div className="InputField">
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => onKeyDown(e)} />
      <button onClick={() => props.onSearch(inputValue)}>Search</button>
    </div>
  );
}
