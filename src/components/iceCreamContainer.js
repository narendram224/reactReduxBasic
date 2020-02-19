import React from 'react'
import { connect } from 'react-redux'
import { buyIceCreams } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <div>
    <label>no fo IceCream:{props.noOfIceCream}</label>
                <button onClick={props.buyIceCreams}>Buy IceCream</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfIceCream :state.ice.noOfIceCreams
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    buyIceCreams:()=> dispatch(buyIceCreams())
    }   
}


export default  connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
