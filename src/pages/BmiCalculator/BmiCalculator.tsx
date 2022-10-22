import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ComponentLayout from '../../components/Common/ComponentLayout';

import Fade from '../../components/Fade/Fade.styled';

import { HealthyBmi, UnhealthyBmi, OkBmi, BmiDiv } from './BmiCalculator.styled';

function BmiCalculator() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const handleWeightChange = (event: any) => {
        setWeight(event.target.value)
    }
    const handleHeightChange = (event: any) => {
        setHeight(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault();
        let res = (weight/(height*height)) * 10000;

        if(res == 0 || res == undefined || res.toString() == 'NaN') return;
        setBmi(res);
        setShow(true);
        setTimeout(() => {
            setShow(false)
            //console.log(show);
        }, 10000)
    }

    const BmiElement = () => {
         <></>;



        if(bmi <= 20.7) return <UnhealthyBmi  text='You are underweight!'></UnhealthyBmi>;
        else if(bmi >= 20.8 && bmi <= 26.4) return <HealthyBmi text='Your bmi is pretty good!'></HealthyBmi>;
        else if (bmi >= 26.5 && bmi <= 27.8) return <OkBmi text='You are a litte overweight!'></OkBmi>;
        else if (bmi >= 27.9 && bmi <= 31.1) return <UnhealthyBmi text='You are overweight!'></UnhealthyBmi>;
        else return <UnhealthyBmi text='You are obese!'></UnhealthyBmi>
    }

    return (
      <ComponentLayout color='rgb(236, 225, 245)'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control required={true} type="number" placeholder="Enter your weight in kilograms" onChange={handleWeightChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Height</Form.Label>
                        <Form.Control required={true} type="number" placeholder="Enter your Height in centimeters" onChange={handleHeightChange} />
                    </Form.Group>
                    <Button style={{ width: "100%", float: "left"}} variant="primary" type="submit">
                        Submit
                    </Button>
                    <BmiDiv><Fade visible={show} delay="1000ms" ><BmiElement></BmiElement></Fade></BmiDiv>
                </Form>
                
                </ComponentLayout>
    )
}

export default BmiCalculator;