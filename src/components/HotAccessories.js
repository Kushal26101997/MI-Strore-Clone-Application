import React from 'react'
import HotItemCard from "./HotItemCard"
import "../style/HotAccessories.css"

// , smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover
// || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover

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
                {/* {smartDevice && smartDevice.map((curElm, index) => (
                    <HotItemCard key={index} name={curElm.name} price={curElm.price} image={curElm.image} index={index} />

                ))}
                {home && home.map((curElm, index) => (
                    <HotItemCard key={index} name={curElm.name} price={curElm.price} image={curElm.image} index={index} />

                ))}

                {lifeStyle && lifeStyle.map((curElm, index) => (
                    <HotItemCard key={index} name={curElm.name} price={curElm.price} image={curElm.image} index={index} />

                ))}

                {mobileAccessories && mobileAccessories.map((curElm, index) => (
                    <HotItemCard key={index} name={curElm.name} price={curElm.price} image={curElm.image} index={index} />

                ))} */}

                <HotItemCard key={0} image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" index={0} name={''} price={0}/>

            </div>

        </div>
    )
}

export default HotAccessories;