import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { Body, MainDiv } from './BmiCalculator.styled';

function BmiCalculator() {
    return (
        <Body>
            <MainDiv>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Enter your weight in kilograms" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Height in centimeters" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </MainDiv>
        </Body>
    )
}

export default BmiCalculator;