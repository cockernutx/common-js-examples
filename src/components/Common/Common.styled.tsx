import React from "react";
import { Row, Toast } from "react-bootstrap";
import styled from 'styled-components';

interface BodyProps {
    color: string;
}

export const ComponentBackground = styled.div<BodyProps>`
background-color: ${(p) => (p.color)};
padding-top: 80px;
height: 100vh;
`;

export const StyledToast = styled(Toast)`
position: fixed;
z-index: 100;

`;