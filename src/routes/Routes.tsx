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
import Timer from "../pages/Timer/Timer";
import Jankenpon from "../pages/Jankenpon/Jankenpon";
import OddOrEven from "../pages/OddOrEven/OddOrEven";
import AmountOfMeat from "../pages/AmountOfMeat/AmountOfMeat";
import UnityConversor from "../pages/UnityConversor/UnityConversor";
import WaterUsage from "../pages/WaterUsage/WaterUsage";

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
            <Route path="Timer/" element={routeElement(<Timer></Timer>)}></Route>
            <Route path="Jankenpon/" element={routeElement(<Jankenpon></Jankenpon>)}></Route>
            <Route path="OddOrEven/" element={routeElement(<OddOrEven></OddOrEven>)}></Route>
            <Route path="AmountOfMeat/" element={routeElement(<AmountOfMeat></AmountOfMeat>)}></Route>
            <Route path="UnityConversor/" element={routeElement(<UnityConversor></UnityConversor>)}></Route>
            <Route path="WaterUsage/" element={routeElement(<WaterUsage></WaterUsage>)}></Route>
          </Routes>
        </HashRouter>
      );
};

export default ApplicationRoutes;
