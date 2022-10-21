import React, { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import Fade from "../../components/Fade/Fade.styled";
import { Body, MainDiv, StyledToast } from "../../components/Common/Common.styled";

function DaysToHours() {
    const [show, setShow] = useState<boolean>(false);
    const [travelDays, setTravelDays] = useState<string>("0");


    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);
    }

    return (
        <Body color="rgb(213, 247, 222)">
            <MainDiv>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your travel time in days</Form.Label>
                        <Form.Control required={true} type="number" placeholder="Days" onChange={(e) => {setShow(false); setTravelDays(e.target.value)}}/>
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>

                    <StyledToast show={show} onClose={() => {setShow(false)}} delay={10000} autohide>
                        <Toast.Header>
          
                            <strong className="me-auto">This is how long your trip will last</strong>
                            
                        </Toast.Header>
                        <Toast.Body>{show ? parseInt(travelDays) * 24 + " hours!" : ""} </Toast.Body>
                    </StyledToast>

            </MainDiv>
        </Body>
    )
}

export default DaysToHours;