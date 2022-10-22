import React, { useState, useEffect } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import ComponentLayout from "../../components/Common/ComponentLayout";

import {useRandomNumber} from './OddOrEven.hooks';
import { RandomNumberDisplay, ResultDisplay } from "./OddOrEven.styled";

function OddOrEven() {
    type OddEven = "odd" | "even";
    const [num, started, start, stop] = useRandomNumber();
    const [res, setRes ] = useState<OddEven>();
    const [userOption, setUserOption] = useState<OddEven>();

    const handleClick = (option: OddEven) => {
        start();
        setUserOption(option);
    }


    const ResultElement = () => {
        if(userOption != res) {
            return (
                <ResultDisplay variant="danger">{num} is {res}! You lost...</ResultDisplay>
            )
        }
        else {
            return (
                <ResultDisplay variant="success" >{num} is {res}! You won!!!</ResultDisplay>
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            stop();
        }, 5000)
        if(!started) {
            if(num%2 == 0) {
                setRes("even")
            }
            else {
                setRes("odd");
            }
        }
    }, [started]);
    

    return (
        <ComponentLayout color="rgb(232, 207, 208)">
       <ButtonGroup aria-label="Basic example" style={{width: "100%"}}>
                <Button variant='primary' onClick={() => {handleClick("odd")}}>Odd!</Button>
                <Button variant='danger' onClick={() => {handleClick("even")}}>Even!</Button>

            </ButtonGroup>
            {started ? <RandomNumberDisplay variant="primary">{num}</RandomNumberDisplay> :
             num == 0 ? <></> : <ResultElement></ResultElement>}
        </ComponentLayout>
    )
}

export default OddOrEven;