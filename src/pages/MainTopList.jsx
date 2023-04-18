import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function MainTopList({ data }) {
  // console.log("마지막");
  // let data = props.data;
  // console.log(data.data.data);
  let dataList = data.filter((item) => item.category === "top");

  return (
    <section className="mainTopList mw">
      <h2>Shop The Latest</h2>
      <Link to="/">View All</Link>
      <ul className="listCon">
        {dataList.map((item) => {
          return (
            <li className="list" key={item._id}>
              <ProductCard data={item}></ProductCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MainTopList;
