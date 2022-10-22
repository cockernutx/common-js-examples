import React, {useState, useEffect} from "react";

export function useRandomNumber() {
    const [num, setNum] = useState<number>(0);
    const [started, setStarted] = useState<boolean>(false);

    const start = () => {setStarted(true)};
    const stop = () => setStarted(false);

    useEffect(() => {
        if(started) {
            const interval = setInterval(
                // set number every 5s
    
                () => {
                        if(started) {
                            let randomNum = Math.floor(Math.random() * 100  + 1);
                        setNum(randomNum);
                        }
                    
    
                },
                50
              );
      
            return () => {
                clearInterval(interval);
              };
        }
    }, [started])

    return [num, started, start, stop] as const;

}