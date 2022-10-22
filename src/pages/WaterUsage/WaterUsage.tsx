import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { StyledToast } from "../../components/Common/Common.styled";
import ComponentLayout from "../../components/Common/ComponentLayout";

function WaterUsage() {
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
        <ComponentLayout color="rgb(210, 240, 209)">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>How long is your shower in minuts</Form.Label>
                    <Form.Control required={true} type="number" onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                </Form.Group>

                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>


            <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                <Toast.Header>

                    <strong className="me-auto">This is how much water you use: </strong>

                </Toast.Header>
                <Toast.Body>{show ?  (parseInt(firstNum) * 9)+ " liters." : ""} </Toast.Body>
            </StyledToast>

        </ComponentLayout>
    )
}

export default WaterUsage;