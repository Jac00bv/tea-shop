import React,{useState} from 'react'
import Offer from './Offer'
import Cart from './Cart'
import '../scss/offers.scss'

const {teas}=require("./Teas");

const Offers= () => {

    const [listItem, changeList]=useState([]);
    const [sum,setSum]=useState(0);
    
    
    return (
        <div>
        <section className="offersSection">
            {teas.map((tea,i) =>
                <div key={i}>

                    <Offer tea={tea} listItem={listItem} changeList={changeList} sum={sum} setSum={setSum}  />
                </div>
            )}
        </section>
        <Cart listItem={listItem} sum={sum} />
        </div>
    )
}
export default Offers

