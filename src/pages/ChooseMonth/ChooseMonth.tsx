import React, { useState } from 'react';
import { Alert, Button, Form, Toast } from 'react-bootstrap';
import { Body, MainDiv, StyledToast } from '../../components/Common/Common.styled';

function ChooseMonth() {
    const [show, setShow] = useState<boolean>(false);
    const [monthNum, setMonthNum] = useState<string>("1");

    const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleSubmit =(event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);
    }
    return (
        <Body color="rgb(240, 234, 204)">
            <MainDiv style={{ height: "20%" }}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>1st number</Form.Label>
                    <Form.Control required={true} type="number" value={monthNum} min="1" max="12" onChange={(e) => { setShow(false); setMonthNum(e.target.value) }} />
                </Form.Group>



                <Alert key="info" variant="info" style={{marginTop: "30px"}}>
                    {months[parseInt(monthNum)]}
                </Alert>



            </MainDiv>
        </Body>
    )
}

export default ChooseMonth;