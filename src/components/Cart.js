import React from 'react'
import '../scss/cart.scss'

const Cart= ({counter,changeCount,teaName}) => {
  

    return (
        <div className="cart">
            <h1>Shopping</h1>
            <h2>{counter.count}</h2>
            <h2>{counter.name}</h2>
            <h3>{counter.sum}</h3>
            

        </div>
    )
}
export default Cart