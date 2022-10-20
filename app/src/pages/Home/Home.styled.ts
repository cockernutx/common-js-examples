import styled from 'styled-components';

import HomeworkCard from '../../components/HomeworkCard/HomeworkCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const StyledContainer = styled(Container)`
max-width: 100%;
`

export const StyledCardsGroup = styled(Row)`

padding: 10px 10px;



`;

export const StyledHomeworkCard = styled(HomeworkCard)`
    max-width: 50%;
    max-height: 500px;

`;