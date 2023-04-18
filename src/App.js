import "./css/App.css";
import list from "./pages/productData";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Footer from "./pages/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  let subName = useLocation().pathname;
  console.log(subName);

  let [data] = useState(list);

  return (
    <div className="App">
      <Header subName={subName}></Header>

      <Routes>
        <Route path="/" element={<Main data={data}></Main>}></Route>
        <Route path="/Shop" element={<Shop data={data}></Shop>}></Route>
        <Route
          path="/Detail/:id"
          element={<Detail data={data}></Detail>}
        ></Route>
        <Route path="/Blog" element={<div>블로그</div>}></Route>
        <Route path="/Story" element={<div>스토리</div>}></Route>
        <Route path="*" element={<div>404 페이지</div>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
