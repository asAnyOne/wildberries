import { Component } from "react";
import "./goods-search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <div className="search-panel">
        {this.props.children}
        <input
          type="text"
          className="form-control search-input"
          placeholder={this.props.placeholder}
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
        {this.props.button && (
          <button
            onClick={this.props.getGoods}
            className="btn btn-group btn-lg btn-secondary"
            type="submit"
          >
            ПОИСК
          </button>
        )}
      </div>
    );
  }
}
