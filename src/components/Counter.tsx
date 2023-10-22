import { useState } from "react";
import classes from './counter.module.scss'
import { BuildOptions } from "../../config/build/types/config";

export const Counter = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1)
    }

    return (
        <div>
            <h2>{state}</h2>
            <button className={classes.btn} onClick={increment}>Incr</button>
        </div>
    )
}