import React from "react";
import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Layout = (props) => {
  const router = useRouter();
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

      <div className="w-full flex">
        <div className="w-1/6">
          <NavBar />
        </div>
        <div className="w-5/6">
          {router.pathname != "/" ? <Header seccion={props.seccion} /> : ""}
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
