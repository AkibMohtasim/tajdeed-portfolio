import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
// import useScrollToTop from "../../hooks/useScrollToTop";
import useScrollToTop from "../hooks/useScrollToTop";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <button id='scroll-btn' className="scroll-button scroll-top" onClick={useScrollToTop}><ArrowLongUpIcon style={{ color: '#eeeeeebb', width: '60%' }} /></button>
    </div>
  );
};

export default Main;
