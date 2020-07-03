import React from 'react'
import {Link} from 'react-router-dom'
import '../scss/cart.scss'

const Cart= ({listItem,sum}) => {
  

    return (
        <div className="cart">
            <h1> 
                Shopping Cart
            </h1>
            {listItem.map((item,i) =>
                <div key={i} className="item">
                    
                    <p>{item.count}</p>
                    <p>{item.name}</p>
                    <p>Price:{item.price}$</p>
                </div>
            )}
            <p>Sum:{sum}$</p>
            <Link to="/cart">
            <button>Go to cart</button>
            </Link>
            <Link to="/checkout">
            <button>Checkout</button>
            </Link>
        </div>
    )
}
export default Cart