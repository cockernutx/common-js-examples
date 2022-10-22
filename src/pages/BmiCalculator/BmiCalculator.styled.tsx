import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';



export const BmiDiv = styled.div`
width: 90%; float: left;

`;

interface BmiAlertProps {
    text: string;
}

export const UnhealthyBmi = (props: BmiAlertProps) => {
    return (
        <Alert style={{lineHeight:"4px", padding: "15px ", textAlign: "center", marginLeft: "5px"}} variant='danger'>{props.text}</Alert>
    )
}
export const HealthyBmi = (props: BmiAlertProps) => {
    return (
        <Alert style={{lineHeight:"4px", padding: "15px ", textAlign: "center", marginLeft: "5px"}}  variant='success'>{props.text}</Alert>
    )
}
export const OkBmi = (props: BmiAlertProps) => {
    return (
        <Alert style={{lineHeight:"4px", padding: "15px ", textAlign: "center", marginLeft: "5px"}}  variant='warning'>{props.text}</Alert>
    )
}


