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
import calendarImage from './images/calendar.webp';
import timerImage from './images/timer.webp';
import jankenponImage from './images/jankenpon.webp';
import oddevenImage from './images/oddeven.webp';
import bbqImage from './images/bbq.webp';
import meterImage from './images/meter.webp';

function Home() {

  return (
    <div >
      <StyledContainer style={{marginTop: "80px"}} >

        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image={calculatorImage} link="Calculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Travel time calculator" text="Convert how long your trip will last from days to hours!" image={airplaneImage} link="DaysToHours/"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Average calculator" text="Calculate the average between two numbers!" image={averageImage} link="AverageCalculator"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Multiplication Table" text="Calculate the average between two numbers!" image={multiplicationImage} link="MultiplicationTable/"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Timer" text="Just a simple timer" image={timerImage} link="Timer/"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Odd or Even" text="Bet if the number is going to be odd or even!" image={oddevenImage} link="OddOrEven/"></HomeworkCard></StyledCardHolder>
        <StyledCardHolder><HomeworkCard title="Unity conversor" text="Conver meters to milimeters, centimeters or kilometers." image={meterImage} link="UnityConversor/"></HomeworkCard></StyledCardHolder>
        




      </StyledContainer>
      <StyledContainer style={{marginTop: "80px"}}>



      <StyledCardHolder> <HomeworkCard title="Bmi Calculator" text="Check if your body mass index is in an healthy range here!" image={humanBody} link="BmiCalculator/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder> <HomeworkCard title="Time lived" text="See how much days, hours and seconds you have lived! (not counting leap years xd)" image={clockImage} link="TimeLived/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="Restaurant bill with service fee" text="Calculate the total of an restaurant bill with an service fee percentage" image={tipsImage} link="BillServiceFee/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="Month picker" text="Just pick a month, simple as." image={calendarImage} link="ChooseMonth/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="Jankenpon" text="An jankenpon game!" image={jankenponImage} link="Jankenpon/"></HomeworkCard></StyledCardHolder>
      <StyledCardHolder><HomeworkCard title="BBQ!" text="See the ammount of meat you will need for your bbq." image={bbqImage} link="AmountOfMeat/"></HomeworkCard></StyledCardHolder>
        
      </StyledContainer>
    
 </div >
  );
};

export default Home;
