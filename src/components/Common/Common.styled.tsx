import React from "react";
import { Toast } from "react-bootstrap";
import styled from 'styled-components';

interface BodyProps {
    color: string;
}

export const Body = styled.div<BodyProps>`
background-color: ${(p) => (p.color)};
min-height: 100vh;

`;

export const MainDiv = styled.div`
    width: 50%;
    height: 150px;
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

export const StyledToast = styled(Toast)`
margin-top: 10px;
margin-left: 20px;
`;