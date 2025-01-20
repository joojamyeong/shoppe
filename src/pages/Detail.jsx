import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import TabUi from "./TabUi";
import Similar from "./Similar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";

function Detail({ data }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = data.find((item) => item._id === parseInt(id, 10));

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  return (
    <section className="detail mw">
      <div className="detailCon">
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/img/${product.img}`}
            alt={product.title}
          />
        </div>
        <div className="info">
          <h3 className="pdTitle">{product.title}</h3>
          <p className="pdPrice">{Number(product.price).toLocaleString()}원</p>
          <p className="pdNum">{product._id}번 상품</p>
          <p className="pdDetail">상품 설명</p>
          <p className="pdDiscount">{product.discount}% 할인</p>

          <div className="countCon">
            <button className="minus" onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
            <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{quantity}</span>
            <button className="plus" onClick={() => setQuantity((prev) => prev + 1)}><FontAwesomeIcon icon={faPlus} /></button>
         <button className="cartbtn" type="button" onClick={handleAddToCart}>
            카트에 담기
          </button> </div>

          
        </div>
      </div>
      <TabUi />
      <Similar data={data.filter((item) => item.category === product.category)} />
    </section>
  );
}

export default Detail;
