import React, { useState, useEffect } from "react";
import PreLoader from "../component/preLoader";
import "../../styles/home.css";

export const Home = () => {

  

  return (
    <>
      <PreLoader />
      <div className="container-fluid"> {/* Agrega la clase main-content aquí */}
        <h1>Hello World.</h1>
      </div>
    </>
  );
};
