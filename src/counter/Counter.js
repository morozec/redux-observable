import React from "react";
import {connect} from "react-redux";

const Counter = ({value, toggled, success, increment, decrement, buttonClick}) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{value}</span>
            <button onClick={decrement}>-</button>
            <div>togged: {toggled ? 'yes' : 'no'}</div>
            <div>success: {success ? 'yes' : 'no'}</div>

            <div>
                <button onClick={() => buttonClick(0)}>0</button>
                <button onClick={() => buttonClick(1)}>1</button>
                <button onClick={() => buttonClick(2)}>2</button>
            </div>
        </div>
    );
}

const mapStateToProps = ({value, toggled, success}) => ({value, toggled, success});

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        buttonClick: (index) => dispatch({type: 'BUTTON_CLICK', payload: index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);