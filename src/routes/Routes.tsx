import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Calculator from "../pages/Calculator/Calculator";

function ApplicationRoutes() {

    const routeElement = (child: React.ReactNode) => {
        return (
          <Layout>
            {child}
          </Layout>
        )
      }
    
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={routeElement(<Home></Home>)} />
            <Route path="Calculator/" element={routeElement(<Calculator></Calculator>)}></Route>
          </Routes>
        </BrowserRouter>
      );
};

export default ApplicationRoutes;
