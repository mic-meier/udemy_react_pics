import React from "react";

class SearchBar extends React.Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input id="image-search"type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
