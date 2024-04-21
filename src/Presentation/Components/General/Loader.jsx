import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-height">
      <MoonLoader size={50} color="#1b396a" />
    </div>
  );
};

export default Loader;
