import React from "react";
const Header = (props) => {
  return (
    <header className="h-24 text-white bg-gray-900">
      <h1 className="text-center font-bold text-7xl">{`Hanma | ${props.seccion}`}</h1>
    </header>
  );
};

export default Header;
