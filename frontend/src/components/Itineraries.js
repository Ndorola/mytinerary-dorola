import React from "react"
import Itinerary from "./Itinerary"

const Itineraries = (props) => {

    const itineraries = props.itineraries

    return (
            itineraries.map((it) => {
                return(
                    <Itinerary it={it}/>
                )
            })
        )
    }

export default Itineraries