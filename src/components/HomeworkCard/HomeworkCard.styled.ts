import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Card)`
    color: black;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;