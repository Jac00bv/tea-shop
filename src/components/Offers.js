import React,{useState} from 'react'
import Offer from './Offer'
import Cart from './Cart'
import '../scss/offers.scss'

const Offers= () => {

    const [counter, changeCount]=useState({count:0,name:'',sum:0});
    const teas=[
        {
            id:'whitetea',
            name:'White Tea',
            price:10,
            description:'White tea with the taste of vanilla and coconut'
        
        },
        {
            id:'blacktea',
            name:'Black Tea',
            price:70,
            description:'A dark and rich superb Assam, India black tea.'
        
        },
        {
            id:`greentea`,
            name:'Green Tea',
            price:10,
            description:'Rare, green tea scented with jasmine flowers.'
        }

    ];


    
    return (
        <div>
        <section className="offersSection">
            {teas.map((tea,i) =>
                <div key={i}>
                    <Offer tea={tea} counter={counter} changeCount={changeCount}  />
                </div>
            )}
        </section>
        <Cart counter={counter} />
        </div>
    )
}
export default Offers
