import React, {useState, useEffect} from 'react';
import { Button, Row, Col, ButtonGroup, Alert, ToastContainer, Toast } from 'react-bootstrap';

import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scisorsImage from './images/scisors.png';
import { ButtonImage, GameAlert, ResultDiv } from './Jankenpon.styled';
import ComponentLayout from '../../components/Common/ComponentLayout';
import { StyledToast } from '../../components/Common/Common.styled';

import useJankenpon, {GameOption} from './Jankenpon.hooks';

function Jankenpon() {
    type AlertVariant = "secondary" | "danger" | "success";
    const [status, botOption, play] = useJankenpon();

    const [playerOption, setPlayerOption] = useState<GameOption | null>(null);
    const [alertVariant, setAlertVariant] = useState<AlertVariant>("secondary");
    const [alertMessage, setAlertMessage] = useState<string>('Choose your move!');
    const [resultList, setResultList] = useState<{message: string, variant: AlertVariant, toggle: boolean}[]>([]);

    const handleClick = (option: GameOption) => {
        play(option);
        setPlayerOption(option);

    }
    useEffect(() => {
        if(playerOption == null) return;
        if(status == "won") {
            setAlertMessage(`The bot chose ${botOption}, you chose ${playerOption}. You won!!`);
            setAlertVariant("success");
            setResultList(resultList => [...resultList, {message: `The bot chose ${botOption}, you chose ${playerOption}. You won!!`, variant: 'success', toggle: true}]);
        }
        else if(status == "lost") {
            setAlertMessage(`The bot chose ${botOption}, you chose ${playerOption}. You lost...`);
            setAlertVariant("danger");
            setResultList(resultList => [...resultList, {message: `The bot chose ${botOption}, you chose ${playerOption}. You lost...`, variant: 'danger', toggle: true}]);
        }
        else {
            setAlertMessage(`The bot chose ${botOption}, you chose ${playerOption}. It's a draw!`);
            setAlertVariant("secondary");
            setResultList(resultList => [...resultList, {message: `The bot chose ${botOption}, you chose ${playerOption}. It's a draw!`, variant: 'secondary', toggle: true}]);
  

        }
    }, [status, botOption, playerOption])
    

    return (
        <ComponentLayout color='#ccc'>
            <ButtonGroup aria-label="Basic example" style={{width: "100%"}}>
                <Button variant='success' onClick={() => {handleClick("rock")}}><ButtonImage src={rockImage}></ButtonImage></Button>
                <Button variant='info' onClick={() => {handleClick("paper")}}><ButtonImage src={paperImage}></ButtonImage></Button>
                <Button variant='warning' onClick={() => {handleClick("scissors")}}><ButtonImage src={scisorsImage}></ButtonImage></Button>
            </ButtonGroup>
            <GameAlert variant={alertVariant}>{alertMessage}</GameAlert>

            <ResultDiv >
            {resultList.map((e) => (
            
                    <Alert variant={e.variant}>{e.message}</Alert>

            ))}
</ResultDiv>

        </ComponentLayout>
    )
}

export default Jankenpon;