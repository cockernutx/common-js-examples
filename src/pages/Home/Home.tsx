import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

import HomeworkCard from "../../components/HomeworkCard/HomeworkCard";

import { StyledContainer, StyledCardHolder } from './Home.styled';
import Col from 'react-bootstrap/Col';





function Home() {

  return (
    <div>
      <StyledContainer >

        <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image="images/calculator.webp" link="Calculator"></HomeworkCard></StyledCardHolder>


        <StyledCardHolder> <HomeworkCard title="Calculator" text="A simple calculator" image="logo192.png" link="/"></HomeworkCard></StyledCardHolder>



      </StyledContainer>
      <StyledContainer>

      <StyledCardHolder><HomeworkCard title="Calculator" text="A simple calculator" image="logo192.png" link="/"></HomeworkCard></StyledCardHolder>

      </StyledContainer>
    
 </div >
  );
};

export default Home;
