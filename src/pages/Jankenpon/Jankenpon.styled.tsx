import React from "react";
import { Alert } from "react-bootstrap";
import styled from 'styled-components';


export const ButtonImage = styled.img`
    width: 100%;
`;

export const GameAlert = styled(Alert)`
    margin-top: 10px;
    text-align: center;
`;

export const ResultDiv = styled.div`
    max-height:320px;width:100%;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;
`