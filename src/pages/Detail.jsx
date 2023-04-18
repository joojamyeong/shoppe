import { useParams } from "react-router-dom";
import Count from "./Count";
import TabUi from "./TabUi";
import Similar from "./Similar";

function Detail({ data }) {
  let { id } = useParams();
  id = id - 1;
  console.log(id);

  let dataList = data.filter((a) => a.category === data[id].category);
  // console.log(dataList);

  return (
    <section className="detail mw">
      <div className="detailCon">
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/img/${data[id].img}`}
            alt={data[id].title}
          />
        </div>
        <div className="info">
          <h3 className="pdTitle">{data[id].title}</h3>
          <p className="pdPrice">{data[id].price}원</p>
          <p className="pdNum">{data[id]._id}번 상품</p>
          <p className="pdDetail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at
            ipsum nihil sint ad libero odio explicabo adipisci unde, maxime ipsa
            doloribus quia illum hic totam in obcaecati, iste culpa enim. Esse
            quibusdam, ullam ipsam eum a quas vero, molestias sapiente officia
            aliquid labore ducimus, ab dignissimos provident accusamus.
            Assumenda!
          </p>
          <p className="pdDiscount">{data[id].discount}% 할인</p>

          <Count />
          <Count />

          {/* <button type="submit">주문하기</button> */}
        </div>
      </div>
      <TabUi></TabUi>
      <Similar data={dataList}></Similar>
    </section>
  );
}

export default Detail;
