import React, { useState } from "react";
import { Form, Button, Toast, ButtonGroup, ToggleButton } from "react-bootstrap";
import { StyledToast } from "../../components/Common/Common.styled";
import ComponentLayout from "../../components/Common/ComponentLayout";

function UnityConversor() {
    const [show, setShow] = useState<boolean>(false);
    const [firstNum, setFirstNum] = useState<string>("0");

    const [conversionValue, setConversionValue] = useState<{ name: string, conversion: string }>({ name: "", conversion: "" });

    const radios = [
        { name: 'Milimeters', value: '*1000' },
        { name: 'Centimeters', value: '*100' },
        { name: 'Kilometers', value: '/1000' },
    ];

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
                    <Form.Label>Meters</Form.Label>
                    <Form.Control required={true} type="number" onChange={(e) => { setShow(false); setFirstNum(e.target.value) }} />
                </Form.Group>
                <ButtonGroup className="mb-2">

                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={conversionValue.conversion === radio.value}
                            onChange={(e) => setConversionValue({name: radio.name, conversion: e.currentTarget.value})}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
<br></br>
                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Convert
                </Button>
            </Form>


            <StyledToast show={show} onClose={() => { setShow(false) }} delay={10000} autohide>
                <Toast.Header>

                    <strong className="me-auto">Conversion: </strong>

                </Toast.Header>
                <Toast.Body>{show ? `${firstNum} is equals to ` + eval((parseInt(firstNum) + conversionValue.conversion)) + ` ${conversionValue.name}` : ""} </Toast.Body>
            </StyledToast>

        </ComponentLayout>
    )
}

export default UnityConversor;