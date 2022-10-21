import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import Calculator from "../pages/Calculator/Calculator";
import BmiCalculator from "../pages/BmiCalculator/BmiCalculator";
import DaysToHours from "../pages/DaysToHours/DaysToHours";
import TimeLived from "../pages/TimeLived/TimeLived";
import AverageCalculator from "../pages/AverageCalculator/AverageCalculator";
import BillServiceFee from "../pages/BillServiceFee/BillServiceFee";
import MultiplicationTable from "../pages/MultiplicationTable/MultiplicationTable";
import ChooseMonth from "../pages/ChooseMonth/ChooseMonth";

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
            <Route path="DaysToHours/" element={routeElement(<DaysToHours></DaysToHours>)}></Route>
            <Route path="TimeLived/" element={routeElement(<TimeLived></TimeLived>)}></Route>
            <Route path="AverageCalculator/" element={routeElement(<AverageCalculator></AverageCalculator>)}></Route>
            <Route path="BillServiceFee/" element={routeElement(<BillServiceFee></BillServiceFee>)}></Route>
            <Route path="MultiplicationTable/" element={routeElement(<MultiplicationTable></MultiplicationTable>)}></Route>
            <Route path="ChooseMonth/" element={routeElement(<ChooseMonth></ChooseMonth>)}></Route>
          </Routes>
        </HashRouter>
      );
};

export default ApplicationRoutes;
