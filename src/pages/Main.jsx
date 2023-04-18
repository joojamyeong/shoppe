import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main({ data }) {
  // let data = props.data;

  return (
    <>
      <MainEvent></MainEvent>
      <MainTopList data={data}></MainTopList>
      <p></p>
    </>
  );
}

export default Main;
