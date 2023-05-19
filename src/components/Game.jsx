import { useEffect, useState } from "react";
import ButtonOption from "./ButtonOption";
import Rockicon from "./icons/Rockicon";
import Papericon from "./icons/Papericon";
import Scissorsicon from "./icons/Scissorsicon";

export default function Game() {
    const choices = [{select: 'rock', icon: <Rockicon />}, {select: 'paper', icon: <Papericon />}, {select: 'scissors', icon: <Scissorsicon />}];

    const [playerSelect, setPlayerSelect] = useState('');
    const [machineSelect, setMachineSelect] = useState('');

    const [gameStatus, setGameStatus] = useState('¡Select an option and play with machine!');

    const [scoreMachine, setScoreMachine] = useState(0);
    const [scorePlayer, setScorePlayer] = useState(0);

    const [componentMachine, setComponentMachine] = useState();
    const [componentPlayer, setComponentPlayer] = useState();

    function selectionPlayer(i) {
        setPlayerSelect(choices[i].select);
        setComponentPlayer(choices[i].icon);
        console.log('Player:', choices[i].select);
    }


    function play() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        setMachineSelect(choices[randomIndex].select);
        setComponentMachine(choices[randomIndex].icon);
        console.log('Machine:', choices[randomIndex].select);
    }

    useEffect(() => {
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
    }, [machineSelect])

    return (
        <>
            <div className="scoreboard">
                <p>{scoreMachine}  machine</p>
                <p className="color-text">VS</p>
                <p>player  {scorePlayer}</p>
            </div>

            <div className="boardgame">
                <span className="color-text">{componentMachine}</span>
                <p>VS</p>
                {componentPlayer}
            </div>


            <p>{gameStatus}</p>

            <div className="btn__section">
                <ButtonOption selectBtn={true} value={choices[0].select} onBtnClick={() => selectionPlayer(0)} />
                <ButtonOption selectBtn={false} value={choices[1].select} onBtnClick={() => selectionPlayer(1)} />
                <ButtonOption selectBtn={false} value={choices[2].select} onBtnClick={() => selectionPlayer(2)} />
            </div>

            <button onClick={() => play()} type="button">Play</button>
        </>
    );
}