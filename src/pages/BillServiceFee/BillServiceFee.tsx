import React, {useState} from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { ComponentBackground, StyledToast } from '../../components/Common/Common.styled';
import ComponentLayout from '../../components/Common/ComponentLayout';

function BillServiceFee() {
    const [show, setShow] = useState<boolean>(false);
    const [billAmmount, setBilAmmount] = useState<string>("0");
    const [serviceFee, setServiceFee] = useState<string>("0");

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        setShow(true);
    }
    return (
        <ComponentLayout color="rgb(250, 222, 200)">

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Bill ammount</Form.Label>
                        <Form.Control required={true} type="number"  onChange={(e) => { setShow(false); setBilAmmount(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service fee (percentage)</Form.Label>
                        <Form.Control required={true} type="number"  onChange={(e) => { setShow(false); setServiceFee(e.target.value) }} />
                    </Form.Group>

                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>

                <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                    <Toast.Header>

                        <strong className="me-auto">This is the total that you will have to pay:</strong>

                    </Toast.Header>
                    <Toast.Body>{show ? `R$${(parseInt(billAmmount) + ((parseInt(billAmmount)/100) *parseInt(serviceFee)))}`: ""} </Toast.Body>
                </StyledToast>

        </ComponentLayout>
    )
}

export default BillServiceFee;