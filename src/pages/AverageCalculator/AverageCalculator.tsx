import React, {useState} from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { ComponentBackground, StyledToast } from '../../components/Common/Common.styled';
import ComponentLayout from '../../components/Common/ComponentLayout';

function AverageCalculator() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");
    const [secondNum, setSecondNum] = useState<string>("0");

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);
    }
    return (
        <ComponentLayout color="rgb(235, 190, 198)">

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
        </ComponentLayout>
    )
}

export default AverageCalculator;