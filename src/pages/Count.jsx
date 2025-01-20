import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";

function Count({ productId, initialQuantity }) {
  const { updateCartQuantity } = useCart();

  // 초기 수량 설정
  const [count, setCount] = useState(initialQuantity);

  // 수량 업데이트
  useEffect(() => {
    updateCartQuantity(productId, count);
  }, [count, productId, updateCartQuantity]);

  const handleIncrease = () => setCount((prev) => prev + 1);

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div className="countCon">
      <button className="minus" onClick={handleDecrease}>
      <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>{count}</span>
      <button className="plus" onClick={handleIncrease}>
      <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Count;
