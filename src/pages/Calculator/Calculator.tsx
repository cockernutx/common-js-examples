import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Button from 'react-bootstrap/Button';

import {
    CalculatorBody,
    MainDiv,
    ResultDiv,
    ResultText,
    StyledRow,
    BackspaceButton,
    BackspaceImage,
    EqualsButton,
    CalculatorButton,
    ParenthesisButton
} from './Calculator.styled';

import { useCalculator } from './Calculator.hooks';

import backspaceIcon from './icons/backspace-svgrepo-com.svg';


function Calculator() {
    const [expression, result, modifyExpression, evaluate, clear, backspace] = useCalculator();
    const [showRes, setShowRes] = useState<boolean>(false);

    const handleModifierChange = (modifier: string) => {
        if(showRes) {
            modifyExpression(result + modifier);
            setShowRes(false);
        }
        else modifyExpression(modifier);

        
    }

    const getResult = () => {
        if(showRes) {
            return;
        }
        evaluate();
        setShowRes(true);
    }

    const handleBackspace = () => {
        if(showRes) {
            modifyExpression(result.toString().slice(0, -1));
            setShowRes(false);
        }
        else {
            backspace();
        }
    }
    const handleClear = () => {
        if(showRes) setShowRes(false);

        clear();
    }

    return (
        <CalculatorBody>
            <MainDiv>
                <ResultDiv><ResultText>{showRes ? result : expression}</ResultText></ResultDiv>
                <Container>
                    <StyledRow xs={1} md={4} className="g-4">
                        <Col>
                            <BackspaceButton size="lg" variant="danger" onClick={handleBackspace}><BackspaceImage src={backspaceIcon}></BackspaceImage></BackspaceButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="danger" onClick={handleClear}>cls</CalculatorButton>
                        </Col>
                        <Col>
                          
                            <Dropdown>
                                <ParenthesisButton variant="secondary" id="dropdown-basic">
                                    par
                                </ParenthesisButton>

                                <Dropdown.Menu>
                                <Dropdown.Item onClick={() => { handleModifierChange("(") }}>{"("}</Dropdown.Item>
                                <Dropdown.Item onClick={() => { handleModifierChange(")") }}>{")"}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-warning" onClick={() => { handleModifierChange("/") }}>/</CalculatorButton>
                        </Col>
                    </StyledRow>
                    <StyledRow  className="g-4">
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("7") }}>7</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("8") }}>8</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("9") }}>9</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-warning" onClick={() => { handleModifierChange("*") }}>*</CalculatorButton>
                        </Col>
                    </StyledRow>
                    <StyledRow  className="g-4">
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("4") }}>4</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("5") }}>5</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("6") }}>6</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-warning" onClick={() => { handleModifierChange("-") }}>-</CalculatorButton>
                        </Col>
                    </StyledRow>
                    <StyledRow className="g-4">
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("1") }}>1</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("2") }}>2</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("3") }}>3</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-warning" onClick={() => { handleModifierChange("+") }}>+</CalculatorButton>
                        </Col>
                    </StyledRow>
                    <StyledRow className="g-4">
                        <Col >
                            <CalculatorButton variant="outline-dark" onClick={() => { handleModifierChange("0") }}>0</CalculatorButton>
                        </Col>
                        <Col>
                            <CalculatorButton variant="outline-info" onClick={() => { handleModifierChange(".") }}>.</CalculatorButton>
                        </Col>
                        <Col>
                            <EqualsButton variant="outline-success" onClick={getResult}>=</EqualsButton>
                        </Col>
                    </StyledRow>
                </Container>
            </MainDiv>
        </CalculatorBody>
    )
}

export default Calculator;