import React from "react";
import ButtonNavBar from "./Button";
import { useRouter } from "next/router";
const NavBar = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen sticky  bg-gray-900 top-0 ">
        <p
          className="mx-10 py-10 text-5xl font-thin text-white"
          onClick={() => router.push("/")}
        >
          Hanma
        </p>
        <input
          type="text"
          className="mx-10 text-3xl w-4/6 rounded-xl bg-gray-900 text-gray-50"
          placeholder="Search.."
        />

        <ButtonNavBar name={"Projects"} route={"/Projects"} />
        <ButtonNavBar name={"Projects"} route={"/Projects"} />
        <ButtonNavBar name={"Projects"} route={"/Projects"} />

        <div className="fixed bottom-0">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-5 px-16 rounded-full mx-10 my-5"
            onClick={props.onCloseButton}
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
