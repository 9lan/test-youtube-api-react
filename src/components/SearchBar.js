import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="ui fluid icon input" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="Search a videos..."
          />
          <i className="search icon"></i>
        </form>
      </div>
    );
  }
}
