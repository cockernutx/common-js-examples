import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

import HomeworkCard from "../../components/HomeworkCard/HomeworkCard";

import { StyledContainer, StyledCardHolder } from './Home.styled';
import Col from 'react-bootstrap/Col';

import calculatorImage from './images/calculator.webp';
import humanBody from './images/humanbody.webp';
import airplaneImage from './images/airplane.webp';
import clockImage from './images/clock.webp';


function Home() {

  return (
    <div >
      <StyledContainer style={{marginTop: "80px"}} >

        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image={calculatorImage} link="Calculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Travel time calculator" text="Convert how long your trip will last from days to hours!" image={airplaneImage} link="DaysToHours/"></HomeworkCard></StyledCardHolder>



      </StyledContainer>
      <StyledContainer style={{marginTop: "80px"}}>



      <StyledCardHolder> <HomeworkCard title="Bmi Calculator" text="Check if your body mass index is in an healthy range here!" image={humanBody} link="BmiCalculator/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder> <HomeworkCard title="Time lived" text="See how much days, hours and seconds you have lived! (not counting leap years xd)" image={clockImage} link="TimeLived/"></HomeworkCard></StyledCardHolder>

      </StyledContainer>
    
 </div >
  );
};

export default Home;
