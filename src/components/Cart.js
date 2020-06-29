import React from 'react'
import '../scss/cart.scss'

const Cart= ({counter,changeCount}) => {
    

    return (
        <div className="cart">
            <h2>{counter}</h2>
            <h2>tea name</h2>
            <button
            onClick={() =>changeCount(counter-1)}
            >-</button>
            <button
            onClick={() =>changeCount(counter+1)}
            >+</button>

        </div>
    )
}
export default Cart