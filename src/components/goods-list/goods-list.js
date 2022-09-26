import Good from "../good/good";
import "./goods-list.css";

export default function GoodsList({ data }) {
  return (
    <ol className="app-list list-group">
      {data.map((item, i) => {
        return <Good key={item.id} {...item} i={i + 1} />;
      })}
    </ol>
  );
}
