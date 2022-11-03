import { useState } from "react";


const Counter = () => {

    //let countState = 77

    const[countState, setCountState] = useState(0)

    function incCount() {
        setCountState(countState+1)
    }
    function incCountTwo() {
        setCountState(countState+2)
    }


    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+1</button>
            <button onClick={incCountTwo}>+2</button>
        </div>
    )
}
export default Counter;