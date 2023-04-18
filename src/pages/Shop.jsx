import { useState } from "react";
import ProductCard from "./ProductCard";

function Shop({ data }) {
  console.log(data);
  let [sortList, setSortList] = useState(data);

  return (
    <section className=" shop mw">
      <h2>Shop</h2>
      <nav className="btnCon">
        <button
          className="btn"
          data-sortName=""
          onClick={() =>
            setSortList([...sortList].sort((a, b) => a._id - b._id))
          }
        >
          최신등록순
        </button>
        <button
          className="btn"
          data-sortName=""
          onClick={() =>
            setSortList([...sortList].sort((a, b) => b._id - a._id))
          }
        >
          상품등록순
        </button>
        <button
          className="btn"
          data-sortName=""
          onClick={() =>
            setSortList([...sortList].sort((a, b) => a.price - b.price))
          }
        >
          낮은가격순
        </button>
        <button
          className="btn"
          data-sortName=""
          onClick={() =>
            setSortList([...sortList].sort((a, b) => b.price - a.price))
          }
        >
          높은가격순
        </button>
        <button
          className="btn"
          data-sortName=""
          onClick={() =>
            setSortList([...sortList].sort((a, b) => b.discount - a.discount))
          }
        >
          높은할인율
        </button>
      </nav>
      <ul className="listCon">
        {sortList.map((item) => {
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

export default Shop;
