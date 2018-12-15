import React from "react";

export default class SearchField extends React.Component {
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
