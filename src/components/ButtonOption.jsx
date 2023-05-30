// value | selectBtn | onBtnClick

import Rockicon from "./icons/Rockicon";
import Papericon from "./icons/Papericon";
import Scissorsicon from "./icons/Scissorsicon";

let element = '';

export default function ButtonOption(props) {

    if (props.value === 'rock') {
        element = <Rockicon />;
    } else if (props.value === 'paper') {
        element = <Papericon />
    } else {
        element = <Scissorsicon />
    }

    return (
        <>
            <button className={`btn btn__option ${props.selectBtn ? 'btn__active' : ''}`} onClick={props.onBtnClick}>
                {element}
                {props.value}
            </button>
        </>
    );
}