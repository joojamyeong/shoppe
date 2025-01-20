import React from "react";
import { useCart } from "./CartContext";
import Count from "./Count";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="empty">장바구니에 상품이 없습니다.</p>;
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>CART</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <div className="cart-item-info">
              <img
                src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div>
                <h3>{item.title}</h3>
                <p>{Number(item.price).toLocaleString()}원</p>
              </div>
            </div>

            <div className="cart-item-quantity">
              <Count productId={item._id} initialQuantity={item.quantity} />
              <p className="item-total-price">
                {Number(item.price * item.quantity).toLocaleString()}원
              </p>
            </div>

            <div className="cart-item-actions">
              <button
                onClick={() => removeFromCart(item._id)}
                className="remove-item"
              >
                 <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <p>TOTAL: {Number(totalPrice).toLocaleString()}원</p>
      </div>
      <div className="cart-order"><button>주문하기</button></div>
    </section>
  );
}

export default Cart;
