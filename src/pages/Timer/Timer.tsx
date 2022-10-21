import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Body, MainDiv } from '../../components/Common/Common.styled'
import { TimerDiv } from './Timer.styled';


interface TimerState {
    time: number;
    seconds: number;
    minutes: number;
}


function Timer() {


    const [state, setState] = useState<TimerState>({
        time: 1,
        seconds: 1 - Math.floor((1 - 1) / 60) * 60 - 1,
        minutes: Math.floor((1 - 1) / 60)
    });

    const [minutes, setMinutes] = useState("1");
    const [seconds, setSeconds] = useState("1");

    const [showTimer, setShowTimer] = useState<boolean>(false);

    useEffect(() => {

        setTimeout(() => {
            if (state.time === 0) {
                setShowTimer(false);
                     return;
            }
            setState({
                time: state.time - 1,
                seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
                minutes: Math.floor((state.time - 1) / 60)
            })   
 

        }, 1000);
    }, [state.time])

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault()
        let time = (parseInt(minutes) * 60) + parseInt(seconds);
        setShowTimer(true)
        setState({
            time: time - 1,
            seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
            minutes: Math.floor((time - 1) / 60)
        })
 
    }

    return (
        <Body color="rgb(196, 204, 197)">
            <MainDiv style={{ height: "30%", width: "300px" }}>
                {showTimer ?
                    <TimerDiv>{`${state.minutes}:${state.seconds <= 10 ? `0${state.seconds}` : state.seconds}`}</TimerDiv> :
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Minutes</Form.Label>
                            <Form.Control required={true} type="number" value={minutes} onChange={(e) => {
                                setMinutes(e.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Seconds</Form.Label>
                            <Form.Control required={true} type="number" value={seconds} onChange={(e) => {
                                setSeconds(e.target.value)
                            }} />
                        </Form.Group>

                        <Button style={{ width: "100%" }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                }



            </MainDiv>
        </Body>
    );
}

export default Timer;