import React from 'react'
import '../scss/offer.scss'

const Offer = ({tea,counter,changeCount}) => {
    let temp=counter.count+1;
    let sum=tea.price;
    return (
        <div>
        <div className="offer">
            <h1>
                {tea.name}
            </h1>
            <img  src={require(`../images/${tea.id}.jpg`)} alt={tea.name}/>
            <p>
            {tea.description}
            </p>
            <h2>
                {tea.price}$
            </h2>
            <button
            onClick={() =>changeCount({count:temp,name:tea.name,sum:sum})}
            
            >Add to cart</button>
        </div>
        </div>
    )
}
export default Offer
