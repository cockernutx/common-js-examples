import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

import HomeworkCard from "../../components/HomeworkCard/HomeworkCard";

import {StyledContainer ,StyledCardsGroup, StyledHomeworkCard } from './Home.styled';
import Col from 'react-bootstrap/Col';





function Home() {

  return (
    <StyledContainer fluid="fluid">
      <StyledCardsGroup xs={1} md={2} className="g-4">
      <Col>
        <StyledHomeworkCard title="Calculator" text="A simple calculator" image="images/calculator.webp" link="Calculator"></StyledHomeworkCard>
 
      </Col>
      <Col >
        <StyledHomeworkCard  title="Calculator" text="A simple calculator" image="logo192.png" link="/"></StyledHomeworkCard>
 
      </Col>
      <Col>
        <StyledHomeworkCard  title="Calculator" text="A simple calculator" image="logo192.png" link="/"></StyledHomeworkCard>
 
      </Col>
    </StyledCardsGroup>
    </StyledContainer>
  );
};

export default Home;
