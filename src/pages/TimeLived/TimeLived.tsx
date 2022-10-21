import React, {useState} from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { Body, MainDiv, StyledToast } from '../../components/Common/Common.styled';

function TimeLived() {
    const [show, setShow] = useState<boolean>(false);
    const [age, setAge] = useState<string>("0");

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);
    }
    return (
        <Body color="rgb(242, 232, 203)">
            <MainDiv>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>What is your age</Form.Label>
                        <Form.Control required={true} type="number" placeholder="In years" onChange={(e) => { setShow(false); setAge(e.target.value) }} />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>

                <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                    <Toast.Header>

                        <strong className="me-auto">This is how long you lived!</strong>

                    </Toast.Header>
                    <Toast.Body>{show ? `${parseInt(age) * 12} months; ${parseInt(age) * 52.143} weeks; ${parseInt(age) * 365} days; ${parseInt(age) * 8760} hours; ${parseInt(age) * 525600} minutes; ${parseInt(age) * 31556952} seconds`: ""} </Toast.Body>
                </StyledToast>

            </MainDiv>
        </Body>
    )
}

export default TimeLived;