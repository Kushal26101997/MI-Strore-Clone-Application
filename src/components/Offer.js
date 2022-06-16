import React from 'react'
import {Link} from 'react-router-dom'

const Offer = ({src,link,index}) => {
    return     <Link to={link}> <img src={src} alt={`${index} offer`} /></Link>
    
}

export default Offer;