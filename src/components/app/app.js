import { Component } from "react";

import GoodsList from "../goods-list/goods-list";
import SearchPanel from "../goods-search-panel/goods-search-panel";

import "./app.css";

export default class App extends Component {
  state = {
    data: [],
    term: "",
  };

  getGoods = () => {
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?apikey=35ce66c9948b2d1e6ca91816bfbd7d29";
    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => {
        this.setState({ data: data.results });
      });
  };

  searchEmp = (items, term) => {
    return items.map((item) => {
      if (
        term.length &&
        item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      ) {
        item.increase = true;
        return item;
      } else {
        item.increase = false;
        return item;
      }
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const filteredData = this.searchEmp(data, term);

    return (
      <div className="app">
        <h1>Товарный поиск </h1>
        <SearchPanel
          onUpdateSearch={this.onUpdateSearch}
          getGoods={this.getGoods}
          placeholder="BREND"
          button={true}
        >
          <h2>Запрос</h2>
        </SearchPanel>
        <SearchPanel
          placeholder="MY BREND"
          onUpdateSearch={this.onUpdateSearch}
        >
          <h2>Мой Бренд</h2>
        </SearchPanel>
        <h3 style={{ margin: "20px 0 0 20px" }}>
          Рейтинг по запросу: {` ${term}`}
        </h3>
        <GoodsList data={filteredData} />
      </div>
    );
  }
}
