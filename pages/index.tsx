import React from "react";
import { NextPage } from "next";
import Layouts from "@components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layouts menuSelected="homepage">
      Selamat Datang di Laman Admin Bhinneka!
    </Layouts>
  );
};

export default HomePage;
