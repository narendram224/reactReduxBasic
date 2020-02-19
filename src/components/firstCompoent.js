import React from 'react'
import { buycake } from '../redux'
import { connect } from 'react-redux'

function FirstCompoent(props) {
    return (
        <div>
            <div>
    <label>no fo cake:{props.noOfCakes}</label>
                <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake:()=> dispatch(buycake())
    }   
}


export default  connect(mapStateToProps,mapDispatchToProps)(FirstCompoent);
