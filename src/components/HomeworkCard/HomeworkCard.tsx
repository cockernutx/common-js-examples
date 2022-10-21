import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import { StyledCard, StyledLink } from './HomeworkCard.styled'

interface HomeworkCardProps {
    title: string;
    text: string;
    image: string;
    link: string;
}

function HomeworkCard(props: HomeworkCardProps) {
    return (
        <StyledLink to={props.link} >
        <StyledCard >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                
                    
        
            </Card.Body>
        </StyledCard>
                </StyledLink >
    )
}

export default HomeworkCard;