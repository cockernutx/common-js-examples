import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';


export const Body = styled.div`
background-color: rgb(236, 225, 245);
min-height: calc(100vh - 60px);

`;

export const MainDiv = styled.div`
    width: 50%;
    height: 25%;
    background-color: white;
    
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    margin: auto;
    padding: 10px;
`;

export const BmiDiv = styled.div`
margin-top: 10px; width: 90%; float: left;

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


