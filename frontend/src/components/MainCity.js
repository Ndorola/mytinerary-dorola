import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction";
// import citiesActions from "../redux/actions/citiesActions";
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
                props.history.push('/cities')
                return false
            }
            setLoading(false)
        }
        getItineraries()
    }, [])


    // useEffect(()=>{
    //     if(!props.city.length){
    //         props.getCities()
    //     }
    // },[])

    if(!props.city) {
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
            {itineraries.map((itinerary) => <Itinerary it={itinerary}/>)}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        itinerariesList: state.itineraries.itinerariesList,
        // citiesList: state.cities.citiesList
    }
}

const mapDispatchToProps = {
    getItineraries: itinerariesActions.getItineraries,
    // getCities: citiesActions.getCities,
}

export default connect (mapStateToProps, mapDispatchToProps)(MainCity)