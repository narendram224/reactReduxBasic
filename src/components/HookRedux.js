import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buycake } from '../redux';

function HookRedux() {
    const noOfCake = useSelector(state=>state.noOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>No of Cake:{noOfCake}</h2>
            <button onClick={()=>dispatch(buycake())}>buy cake</button>
        </div>
    )
}

export default HookRedux
