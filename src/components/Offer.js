import React,{useState} from 'react'
import '../scss/offer.scss'
import Tea from '../images/whitetea.jpg'
import Cart from './Cart'
const Offer = () => {

    const [counter, changeCount]=useState(0);

    return (
        <div>
        <div className="offer">
            <h1>
                White Tea
            </h1>
            <img  src={Tea} alt="White Tea"/>
            <p>
            Our white tea is a sweet, medium-bodied delicacy with notes of peach.
            </p>
            <button
            onClick={() =>changeCount(counter + 1)}
            >Add to cart</button>
        </div>
        <Cart counter={counter} changeCount={changeCount}/>
        </div>
    )
}
export default Offer
