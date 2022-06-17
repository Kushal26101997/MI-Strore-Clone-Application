import React from 'react'
import HotItemCard from "./HotItemCard"
import "../style/HotAccessories.css"

const HotAccessories = ({ item, itemCover }) => {
    return (
    
        <div className="HotAccessories">

            <div>
                <img src={itemCover} alt="Cover" />
            </div>

            {/* -----------2nd */}
            <div>

                {
                     item.map((curElm, index) => {
                        return <HotItemCard key={index} name={curElm.name} price={curElm.price} image={curElm.image} index={index} />
                    })
                }

                <HotItemCard key={30} image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" index={''} name={''} price={''}/>
            </div> 

        </div>
    )
}

export default HotAccessories;