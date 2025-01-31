import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductHome from "./app/component/ProductHome/ProductHome";
import { Fragment } from "react";
import ProductDetailsContainer from "./app/component/ProductDetailsContainer/ProductDetailsContainer";

function App() {
  return (
    <Routes>
      {/* <div className="App"> */}
      <Route path="/" element={<ProductHome />} />
      <Route path='/productdetail/:id' element={<ProductDetailsContainer />} />
      {/* </div> */}
    </Routes>
  );
}

export default App;
