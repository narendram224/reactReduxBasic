import React, { useState } from 'react'
import { buycake } from '../redux'
import { connect } from 'react-redux'

function PayLoadCakeContainer(props) {
    const [number,SetNumber] = useState(0);
    return (
        <div>
            <div>
    <label>no fo cake:{props.noOfCakes}</label>
        <input value={number} onChange={e=>SetNumber(e.target.value)} type="text" />
                <button onClick={()=>props.buyCake(number)}>Buy{number} cake</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes :state.cake.noOfCake
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake:(num)=> dispatch(buycake(num))
    }   
}


export default  connect(mapStateToProps,mapDispatchToProps)(PayLoadCakeContainer);
