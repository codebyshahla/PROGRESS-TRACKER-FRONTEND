/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import {BrowserRouter} from 'react-router-dom'
import CommonRouter from "./Router/CommonRouter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <CommonRouter />
        {/* <Otp/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
