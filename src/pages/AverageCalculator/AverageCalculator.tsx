import React, {useState} from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { Body, MainDiv, StyledToast } from '../../components/Common/Common.styled';

function AverageCalculator() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");
    const [secondNum, setSecondNum] = useState<string>("0");

    const handleSubmit = () => {
        setShow(true);
    }
    return (
        <Body color="rgb(235, 190, 198)">
            <MainDiv style={{height: "250px"}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>1st number</Form.Label>
                        <Form.Control required={true} type="number"  onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>2nd number</Form.Label>
                        <Form.Control required={true} type="number"  onChange={(e) => { setShow(false); setSecondNum(e.target.value) }} />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>

                <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                    <Toast.Header>

                        <strong className="me-auto">This is the average of the numbers set!</strong>

                    </Toast.Header>
                    <Toast.Body>{show ? `${(parseInt(firstNum) + parseInt(secondNum)) /2}`: ""} </Toast.Body>
                </StyledToast>

            </MainDiv>
        </Body>
    )
}

export default AverageCalculator;