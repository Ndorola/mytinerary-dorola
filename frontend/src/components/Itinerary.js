import React from "react"
import { useState } from "react"
import { FcCurrencyExchange } from "react-icons/fc"
import { FcClock } from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc"

const Itinerary = ({it}) => {

    const [visible, setVisible] = useState(false)

    const toggleInfo = () => {
        setVisible(!visible)
    }

    const icons = [1, 2, 3, 4, 5]
    let quantityIcons  = icons.splice(0,it.price)

    return (
        <>
        {console.log(it)}
        <div className="itContainer">
            <div className="itMain">
                <div className="itImage" style={{backgroundImage: `url("/assets/itineraries/${it.itinerary.img}")`}}></div>
                <div className="itBox">
                    <div className="itUser">
                        <img src={`/assets/itineraries/${it.user.img}`}/>
                        <p>{it.user.name}</p>
                    </div>
                    <div className="itTitle">
                        <h3>{it.itinerary.title}</h3>
                        <p>{it.itinerary.description}</p>
                    </div>
                    <div className="itHashtags">
                    {it.hashtags.map((hashtag, index) => (
                        <p key={index}>{hashtag}</p>
                    ))}
                    </div>
                    <div className="iconsBox">
                        <div className="itIcons">
                            <p>Price: </p>
                            {quantityIcons.map((icon, index) => <p key={index}><FcCurrencyExchange/></p>)}
                        </div>
                        <div className="itIcons">
                            <p><FcClock/></p>
                            <p>{it.time} hours</p>
                        </div>
                        <div className="itIcons">
                            <p><FcLikePlaceholder/></p>
                            <p>{it.likes}</p>
                        </div>
                    </div>
                    <div className="itButton">
                        {visible?
                        <div className="under">
                            <img src="/assets/underConstruction.png"/>
                        </div>
                        : null}
                        <button className="btnUnder" onClick={toggleInfo}>
                            {!visible ? "View More" : "View Less"}
                        </button>
                    </div>
                </div>
                {/* <div className="wrapper">
                    <div className="item">
                        <div className="polaroid">
                            <img src={`/assets/itineraries/${it.itinerary.img}`}/>
                            <div className="caption">I Miss London</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src={`/assets/itineraries/${it.itinerary.img}`}/>
                            <div className="caption">Love ballons</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src={`/assets/itineraries/${it.itinerary.img}`}/>
                            <div className="caption">Vintage life </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
                </>
                )
            }

export default Itinerary