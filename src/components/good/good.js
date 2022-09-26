import { Component } from "react";
import "./good.css";

export default class Good extends Component {
  render() {
    const { name, increase, i } = this.props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label">
          {`${i}.  `}
          {name}
        </span>
      </li>
    );
  }
}
