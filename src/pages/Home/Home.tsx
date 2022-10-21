import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

import HomeworkCard from "../../components/HomeworkCard/HomeworkCard";

import { StyledContainer, StyledCardHolder } from './Home.styled';
import Col from 'react-bootstrap/Col';

import calculatorImage from './images/calculator.webp';
import humanBody from './images/humanbody.webp';
import airplaneImage from './images/airplane.webp';
import clockImage from './images/clock.webp';
import averageImage from './images/average.webp';
import tipsImage from './images/tips.webp';
import multiplicationImage from './images/multiplication.webp';


function Home() {

  return (
    <div >
      <StyledContainer style={{marginTop: "80px"}} >

        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image={calculatorImage} link="Calculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Travel time calculator" text="Convert how long your trip will last from days to hours!" image={airplaneImage} link="DaysToHours/"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Average calculator" text="Calculate the average between two numbers!" image={averageImage} link="AverageCalculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Multiplication Table" text="Calculate the average between two numbers!" image={multiplicationImage} link="MultiplicationTable/"></HomeworkCard></StyledCardHolder>




      </StyledContainer>
      <StyledContainer style={{marginTop: "80px"}}>



      <StyledCardHolder> <HomeworkCard title="Bmi Calculator" text="Check if your body mass index is in an healthy range here!" image={humanBody} link="BmiCalculator/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder> <HomeworkCard title="Time lived" text="See how much days, hours and seconds you have lived! (not counting leap years xd)" image={clockImage} link="TimeLived/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="Restaurant bill with service fee" text="Calculate the total of an restaurant bill with an service fee percentage" image={tipsImage} link="BillServiceFee/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image={calculatorImage} link="ChooseMonth/"></HomeworkCard></StyledCardHolder>
        

      </StyledContainer>
    
 </div >
  );
};

export default Home;
