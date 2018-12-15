import React from "react";

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.initialValue
    };
  }

  onKeyDown(e) {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      this.props.onSearch(this.state.inputValue);
    }
  }

  render() {
    return (
      <div className="InputField">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e =>
            this.setState({
              inputValue: e.target.value
            })
          }
          onKeyDown={e => this.onKeyDown(e)}
        />
        <button onClick={() => this.props.onSearch(this.state.inputValue)}>Search</button>
      </div>
    );
  }
}
