import React, {useState} from 'react';

export 
type GameOption = "rock" | "paper" | "scissors";
type GameStatus = "won" | "lost" | "draw";

function useJankenpon() {
    const [botOption, setBotOption] = useState<GameOption>();
    const [status, setStatus] = useState<GameStatus>();

    const play = (option: GameOption) => {
        let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        let bOption: GameOption = "rock";
        switch(num) {
            case 1:
                bOption = "rock";
                setBotOption("rock");
                break;
            case 2:
                bOption = "paper";
                setBotOption("paper");
                break;
            case 3: 
            bOption = "scissors";
                setBotOption("scissors");
                break;
        }

        switch(option) {
            case "rock":
                if(bOption == "rock") {
                    setStatus("draw");
                    
                }
                if(bOption == "paper") {
                    setStatus("lost")
                }
                if(bOption == "scissors") {
                    setStatus("won")
                }
                break;
                
            case "paper":
                if(bOption == "rock") {
                    setStatus("won");
                    
                }
                if(bOption == "paper") {
                    setStatus("draw")
                }
                if(bOption == "scissors") {
                    setStatus("lost")
                }
                break;
            case "scissors":
                if(bOption == "rock") {
                    setStatus("lost");
                    
                }
                if(bOption == "paper") {
                    setStatus("won")
                }
                if(bOption == "scissors") {
                    setStatus("draw")
                }
                break;

        }
    }

    return [status, botOption, play] as const;
}

export default useJankenpon;