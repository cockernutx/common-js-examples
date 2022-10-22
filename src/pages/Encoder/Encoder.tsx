import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { StyledToast } from "../../components/Common/Common.styled";
import ComponentLayout from "../../components/Common/ComponentLayout";

function Encoder() {
    const [show, setShow] = useState<boolean>(false);
    const [str, setStr] = useState<string>("0");



    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);

    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <ComponentLayout color="rgb(233, 208, 245)">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type your message</Form.Label>
                    <Form.Control required={true} type="text" onChange={(e) => { setShow(false); setStr(e.target.value) }} />
                </Form.Group>

                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


            <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                <Toast.Header>

                    <strong className="me-auto">This is your message in base 64</strong>

                </Toast.Header>
                <Toast.Body>{show ? btoa(str) : ""} </Toast.Body>
            </StyledToast>

        </ComponentLayout>
    )
}

export default Encoder;