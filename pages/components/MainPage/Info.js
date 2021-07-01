import React from "react";

const Info = (props) => {
  return (
    <>
      <div className="h-screen">
        <h1 className="py-10 font-bold text-5xl mx-10 relative">
          {props.title}
        </h1>
        <div className="py-10 w-full flex flex-row">
          <p className=" mx-10 text-xl md:w-3/5 sm:w-full text-justify">
            {props.children}
          </p>
          <img
            src={props.image}
            alt="Imagen"
            className="md:w-2/5 sm:w-full pr-3"
          />
        </div>
      </div>
    </>
  );
};

export default Info;
