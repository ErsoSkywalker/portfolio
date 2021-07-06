import React, { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import RingLoader from "react-spinners/RingLoader";
import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Layout = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [stateNavbar, setStateNavbar] = useState([]);
  const [stateHidden, setStateHidden] = useState([]);

  const handleCloseButton = (evt) => {
    setStateNavbar(stateNavbar ? false : true);
  };

  if (stateNavbar.length == 0) {
    setStateNavbar(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setStateHidden("hidden");
      }, 500);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>{props.seccion}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={` ${
          loading ? "" : "opacity-0 duration-200"
        } flex ${stateHidden} justify-center h-screen w-screen items-center absolute transition bg-gray-400`}
      >
        <RingLoader color={"#000000"} loading={true} size={150} />
      </div>

      <div className="w-screen flex">
        <div
          className={`${
            stateNavbar ? "" : "-translate-x-full"
          } transition w-screen delay-300 duration-500 absolute`}
        >
          <NavBar onCloseButton={handleCloseButton} />
        </div>

        <div className="  overflow-y-scroll w-screen snap-mandatory snap snap-y max-h-screen">
          {router.pathname != "/" ? <Header seccion={props.seccion} /> : ""}
          {props.children}
          <Footer />
        </div>
        <button
          className={` ${
            stateNavbar || loading
              ? "opacity-0 delay-0"
              : "opacity-100 delay-500"
          } bottom-5 absolute bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-full left-5 p-5  transition duration-500`}
          onClick={handleCloseButton}
        >
          <GoThreeBars />
        </button>
      </div>
    </div>
  );
};

export default Layout;
