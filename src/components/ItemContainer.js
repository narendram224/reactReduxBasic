import React from 'react'
import { connect } from 'react-redux'
import { buycake, buyIceCreams } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>item:{props.item}</h2>
            <button onClick={props.buyItem}> buy item as you want</button>
        </div>
    )
}

const mapStateToProps = (state,ownprops) => {
    const itemState =  ownprops.cake
                    ?state.cake.noOfCake
                    :state.ice.noOfIceCreams

return{
    item:itemState
}         }

const mapDispatchToProps =(dispatch,ownprops)=>{
        const dispathcFunction =ownprops.cake
        ?()=>dispatch(buycake())
        :()=>dispatch(buyIceCreams())
    return{
        buyItem:dispathcFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
