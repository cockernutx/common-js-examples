import exp from 'constants';
import React, {useState} from 'react';

export function useCalculator() {
    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const evaluate = () => {
        let res = eval(expression);
        setResult(res);
        setExpression("");
    }

    const modifyExpression = (newParameter: string) => {
        setExpression(expression + newParameter);
    }

    const clear = () => {
        setExpression("");
    }

    const backspace = () => {
        setExpression(expression.slice(0,-1));
    }

    return [expression, result, modifyExpression, evaluate, clear, backspace] as const;
}

