// value | selectBtn | onBtnClick

export default function ButtonOption(props) {

    return (
        <>
            <button className="btn" onClick={props.onBtnClick}>
                <img className="btn__icon" src={'../' + props.value + '.svg'} alt={props.value} />
                {props.value}
            </button>
        </>
    );
}