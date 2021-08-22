import React from "react"
import { useState } from "react"

const Itinerary = (props) => {

    const [visible, setVisible] = useState(false)

    const toggleInfo = () => {
        setVisible(!visible)
    }

    const it = props.it

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
                    <div className="itIcons">
                        irian los iconos
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