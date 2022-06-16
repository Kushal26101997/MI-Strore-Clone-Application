import React from 'react'
import '../style/Offer.css'
import Offer from './Offer'

const Offers = ({offers}) => {

    return(
        <div className="offerSection">
            {
                offers.map((curElm, index)=>{
                    return <Offer key={index} index={index} src={curElm.image} link={curElm.url}/>
                })
            }
        </div>
    )
    
}

export default Offers;