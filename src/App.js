import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductHome from "./app/component/ProductHome/ProductHome";
import { Fragment } from "react";

function App() {
  return (
    <Routes>
      {/* <div className="App"> */}
      <Route path="/" element={<ProductHome />} />
      <Route path='/productdetail/${id}' element={<ProductHome />} />
      {/* </div> */}
    </Routes>
  );
}

export default App;
