import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import {StyledCardImage} from './HomeworkCard.styled'

interface HomeworkCardProps {
    title: string;
    text: string;
    image: string;
    link: string;
}

function HomeworkCard(props: HomeworkCardProps) {
    return (
        <Card >
            <StyledCardImage variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Link to={props.link}>
                    <Button variant="primary">Go!</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default HomeworkCard;