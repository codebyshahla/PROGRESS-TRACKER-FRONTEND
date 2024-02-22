/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonRouter from "./Router/CommonRouter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
