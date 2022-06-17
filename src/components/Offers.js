import React from 'react'
import '../style/Offers.css'
import Offer from './Offer'

const Offers = ({offers}) => {

    return(
        <div className="offersSection">
            {
                offers.map((curElm, index)=>{
                    return <Offer key={index} index={index} src={curElm.image} link={curElm.url}/>
                })
            }
        </div>
    )
    
}

export default Offers;