import React, { PropsWithChildren } from "react";
import Head from "next/head";
import SideNav from "../components/side-bar";
// import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/* <Head>
        <title>Your Website Title</title> */}
      {/* Add meta tags, stylesheets, scripts, etc. */}
      {/* </Head>
      <Header /> */}
      <SideNav></SideNav>
      <div>
        <h1>hello world </h1>
        <main>{children}</main>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
