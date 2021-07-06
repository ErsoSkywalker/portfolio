import React from "react";
import { useRouter } from "next/router";
const ButtonNavBar = (props) => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-5 px-16 rounded-full mx-10 my-5"
        onClick={() => router.push(`${props.route}`)}
      >
        {props.name}
      </button>
    </>
  );
};

export default ButtonNavBar;
