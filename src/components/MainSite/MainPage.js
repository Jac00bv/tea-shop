import React, { useState } from "react";
import Header from "../Header";
import Offers from "./Offers";
import Footer from "../Footer";

const MainPage = () => {
  const [cartStatus, toggle] = useState(true);
  return (
    <>
      <Header cartStatus={cartStatus} toggle={toggle} />
      <Offers cartStatus={cartStatus} />
      <Footer />
    </>
  );
};

export default MainPage;
