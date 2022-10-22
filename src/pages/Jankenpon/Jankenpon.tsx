import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { ComponentBackground } from '../../components/Common/Common.styled';

import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scisorsImage from './images/scisors.png';
import { PlayButtonsDiv } from './Jankenpon.styled';
import ComponentLayout from '../../components/Common/ComponentLayout';

function Jankenpon() {
    return (
        <ComponentLayout color='#ccc'>
                    <Button variant='primary'><img src={rockImage}></img></Button>
                    <Button variant='primary'><img src={paperImage}></img></Button>
                    <Button variant='primary'><img src={scisorsImage}></img></Button>

        </ComponentLayout>
    )
}

export default Jankenpon;