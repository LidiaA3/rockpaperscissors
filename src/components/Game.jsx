import { useEffect, useState } from "react";
import ButtonOption from "./ButtonOption";
import Rockicon from "./icons/Rockicon";
import Papericon from "./icons/Papericon";
import Scissorsicon from "./icons/Scissorsicon";

export default function Game() {
    const choices = ['rock', 'paper', 'scissors'];

    const [playerSelect, setPlayerSelect] = useState('');
    const [machineSelect, setMachineSelect] = useState(choices[Math.floor(Math.random() * choices.length)]);

    const [gameStatus, setGameStatus] = useState('¡Select an option and play with machine!');

    const [scoreMachine, setScoreMachine] = useState(0);
    const [scorePlayer, setScorePlayer] = useState(0);

    const [componentMachine, setComponentMachine] = useState();
    const [componentPlayer, setComponentPlayer] = useState();


    function play() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        setMachineSelect(choices[randomIndex]);

        if (machineSelect === 'rock') {
            setComponentMachine(<Rockicon />);
        } else if (machineSelect === 'paper') {
            setComponentMachine(<Papericon />);
        } else {
            setComponentMachine(<Scissorsicon />);
        }

        // useEffect({
        //     if (playerSelect === 'rock') {
        //         setComponentMachine(<Rockicon />);
        //     } else if (playerSelect === 'paper') {
        //         setComponentMachine(<Papericon />);
        //     } else {
        //         setComponentMachine(<Scissorsicon />);
        //     }
        // }, playerSelect);

        if (playerSelect === machineSelect) {
            setGameStatus('its a tie');
        } else if (
                playerSelect === 'rock' && machineSelect === 'scissors' ||
                playerSelect === 'paper' && machineSelect === 'rock' ||
                playerSelect === 'scissors' && machineSelect === 'paper'
            ) {
            setGameStatus('¡You win the game!');
            setScorePlayer(scorePlayer + 1);
        } else {
            setGameStatus('¡Oooh machine win!');
            setScoreMachine(scoreMachine + 1);
        }
    }

    return (
        <>
            <div className="scoreboard">
                <p>{scoreMachine}  machine</p>
                <p className="color-text">VS</p>
                <p>player  {scorePlayer}</p>
            </div>

            <div className="boardgame">
                {componentMachine}
                <p>VS</p>
                {componentPlayer}
            </div>


            <p>{gameStatus}</p>

            <div className="btn__section">
                <ButtonOption selectBtn={true} value={choices[0]} onBtnClick={() => setPlayerSelect(choices[0])} />
                <ButtonOption selectBtn={false} value={choices[1]} onBtnClick={() => setPlayerSelect(choices[1])} />
                <ButtonOption selectBtn={false} value={choices[2]} onBtnClick={() => setPlayerSelect(choices[2])} />
            </div>

            <button onClick={() => play()} type="button">Play</button>
        </>
    );
}