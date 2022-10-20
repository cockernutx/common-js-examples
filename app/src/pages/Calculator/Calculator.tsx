import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { CalculatorBody, MainDiv, ResultDiv, ResultText, StyledRow } from './Calculator.styled';

function Calculator() {
    return (
        <CalculatorBody>
            <MainDiv>
                <ResultDiv><ResultText>0</ResultText></ResultDiv>
                <Container>
                    <StyledRow xs={1} md={2} className="g-4">
                        <Col>
                            <button><img src="icons/backspace-svgrepo-com.svg"></img></button>
                        </Col>
                    </StyledRow>
                </Container>
            </MainDiv>
        </CalculatorBody>
    )
}

export default Calculator;