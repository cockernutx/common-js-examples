import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

import HomeworkCard from "../../components/HomeworkCard/HomeworkCard";

import { StyledContainer, StyledCardHolder } from './Home.styled';
import Col from 'react-bootstrap/Col';

import calculatorImage from './images/calculator.webp';
import humanBody from './images/humanbody.webp';


function Home() {
  
  return (
    <div>
      <StyledContainer >

        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image={calculatorImage} link="Calculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image="logo192.png" link="/"></HomeworkCard></StyledCardHolder>



      </StyledContainer>
      <StyledContainer>



      <StyledCardHolder> <HomeworkCard title="Bmi Calculator" text="Check if your body mass index is in an healthy range here!" image={humanBody} link="BmiCalculator/"></HomeworkCard></StyledCardHolder>

      </StyledContainer>
    
 </div >
  );
};

export default Home;
