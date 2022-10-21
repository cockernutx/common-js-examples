import React, { useState } from 'react';
import { Button, Form, Modal, Toast } from 'react-bootstrap';
import { Body, MainDiv, StyledToast } from '../../components/Common/Common.styled';

function MultiplicationTable() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");
    const [res, setRes] = useState<string[]>([]);


    const handleSubmit = () => {
        let rows: string[] = [];
        for (let i = 0; i <= 10; i++) {
            rows.push(`${firstNum}*${i}=${parseInt(firstNum) * i}`);
        }
        setShow(true);
        setRes(rows);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <Body color="rgb(163, 177, 199)">
            <MainDiv style={{ height: "150px" }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type the number that you want an multiplication table for</Form.Label>
                        <Form.Control required={true} type="number" onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>


            </MainDiv>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {res.map((a) => <>{a}<br></br></>)}
                </Modal.Body>
            </Modal>
        </Body>
    )
}

export default MultiplicationTable;