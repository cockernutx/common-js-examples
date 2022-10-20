import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Calculator from "../pages/Calculator/Calculator";
import BmiCalculator from "../pages/BmiCalculator/BmiCalculator";

function ApplicationRoutes() {

    const routeElement = (child: React.ReactNode) => {
        return (
          <Layout>
            {child}
          </Layout>
        )
      }
    
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={routeElement(<Home></Home>)} />
            <Route path="Calculator/" element={routeElement(<Calculator></Calculator>)}></Route>
            <Route path="BmiCalculator/" element={routeElement(<BmiCalculator></BmiCalculator>)}></Route>
          </Routes>
        </HashRouter>
      );
};

export default ApplicationRoutes;
