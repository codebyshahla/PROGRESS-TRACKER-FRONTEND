import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="">
      



        <Link to={"/signup"}>
          {" "}
          <button className="text-white bg-orange-500 w-44 rounded-2xl">
            GET STARTED{" "}
          </button> 
        </Link>
      </div>
    </>
  );
}

export default Home;
