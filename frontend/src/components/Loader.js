import React from "react";
import "../assets/css/loader.css";
const Loader = () => {
  return (
    <>
      <div className="container-loader">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
