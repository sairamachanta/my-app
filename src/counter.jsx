import React from "react";
import { connect } from "react-redux";
function Counter(props) {
    console.log(props)
    return (
        <div className="border border-2 border-danger m-2 p-2">
            <h2>COUNTER:{props.counterreducer.count}</h2>

            <button onClick={() => { props.dispatch({ type: 'INCREMENT' }) }}>
                INCREMENT
            </button>
            <button onClick={() => { props.dispatch({ type: 'DECREMENT' }) }}>
                DECREMENT
            </button>

        </div>
    )

}
export default connect(function (store) { return store })(Counter)