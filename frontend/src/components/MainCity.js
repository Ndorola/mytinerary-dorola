import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert';
import Loader from './Loader'
import Itinerary from "./Itinerary";


const MainCity = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0)
        async function getItineraries() {
            try{
                await props.getItineraries()
            } catch(error) {
                Swal({
                    title:"Oops! There was a mistake.",
                    text:"The link you selected may be broken or the page may have been removed.",
                    icon:"warning",
                    button:"Ok!",
                })
                setTimeout(() => {
                    props.history.push('/cities')
                }, 3000)
            }
            setLoading(false)
        }
        getItineraries()
    }, [])

    if(!props.city) {
        Swal({
            title:"Oops! There was a mistake.",
            text:"The link you selected may be broken or the page may have been removed.",
            icon:"warning",
            button:"Ok!",
        })
        props.history.push('/cities')
        return false
    }
    
    if (loading) {
        <Loader/>
    }

    let itineraries = props.itinerariesList.filter((itinerary) => itinerary.cityId === props.match.params.id)
    console.log(itineraries)

        return (
        <>
            <div className="mainCity" style={{backgroundImage: `url("/assets/fotos/${props.city.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <div className="headerCity">
                    <nav id="navCity">
                        <NavLink exact to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/cities"><p>Cities</p></NavLink>
                        <NavLink to = "/login"><p>Sign up</p></NavLink>
                        <NavLink to = "/logout"><p>Log in</p></NavLink>
                    </nav>
                    <NavLink to = "/user"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
                </div>
                <div className="boxTitleCity">
                    <h2 className="titleCity">Welcome to {props.city.name}</h2>
                </div>
            </div>
            {(itineraries.length !== 0) ? itineraries.map((itinerary) => <Itinerary it={itinerary}/>)
                : <div className="ups">
                    <img src="/assets/ups.png"/>
                    <h3 className="sorry">Sorry, this city has no itineraries. Back to home!</h3>
                </div>
            }           
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        itinerariesList: state.itineraries.itinerariesList,
    }
}

const mapDispatchToProps = {
    getItineraries: itinerariesActions.getItineraries,
}

export default connect (mapStateToProps, mapDispatchToProps)(MainCity)