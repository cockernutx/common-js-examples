import React, { useState } from 'react';
import { Button, Form, Modal, Toast } from 'react-bootstrap';
import { ComponentBackground, StyledToast } from '../../components/Common/Common.styled';
import ComponentLayout from '../../components/Common/ComponentLayout';

function MultiplicationTable() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");
    const [res, setRes] = useState<string[]>([]);


    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
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
        <ComponentLayout color="rgb(163, 177, 199)">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type the number that you want an multiplication table for</Form.Label>
                        <Form.Control required={true} type="number" onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>'{firstNum}'' multiplication table</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {res.map((a) => <>{a}<br></br></>)}
                </Modal.Body>
            </Modal>
        </ComponentLayout>
    )
}

export default MultiplicationTable;