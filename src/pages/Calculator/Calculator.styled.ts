import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


export const ResultDiv = styled.div`
text-align: right;
    background: linear-gradient(90deg,#06beb6,#48b1bf 100%);
border-top-left-radius: 10px;
border-top-right-radius: 10px;
display: flex;
flex-direction: column;
padding: 10px 10px 20px;
height: 80px;

`;

export const ResultText = styled.div`
background-color: transparent;
border: 0;
color: #fff;
letter-spacing: 1.5px;
padding: 10px;
text-align: right;
font-size:32px;
`;

export const StyledRow = styled(Row)`
    padding: 10px 1px;
`;

export const BackspaceButton = styled(Button)`

width:100%;
max-height: 50px;
`

export const BackspaceImage = styled.img`
    height: 30px;
`;

export const EqualsButton = styled(Button)`

width:100%;
height: 50px;
`;


export const CalculatorButton = styled(Button)`

width:100%;
height: 50px;

`;

export const ParenthesisButton = styled(Dropdown.Toggle)`

width:100%;
height: 50px;
`;
