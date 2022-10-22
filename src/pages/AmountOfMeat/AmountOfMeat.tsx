import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { StyledToast } from "../../components/Common/Common.styled";
import ComponentLayout from "../../components/Common/ComponentLayout";

function AmountOfMeat() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");



    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);

    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <ComponentLayout color="rgb(225, 233, 245)">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type the number of people</Form.Label>
                    <Form.Control required={true} type="number" onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                </Form.Group>

                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>


            <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                <Toast.Header>

                    <strong className="me-auto">This is how much meat you will need for your bbq!</strong>

                </Toast.Header>
                <Toast.Body>{show ? "You will need: " + (parseInt(firstNum) * 300) / 1000 + " kilos!" : ""} </Toast.Body>
            </StyledToast>

        </ComponentLayout>
    )
}

export default AmountOfMeat;