import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert';
import Footer from "../components/Footer";
import Itineraries from "../components/Itineraries";

const City = (props) => {
    const[city, setCity] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/cities/${props.match.params.id}`)
            .then((response) => {
                if (response.data.success) {
                    setCity(response.data.response)
                } else {
                    console.log(response.data.response)
                    Swal({
                        title:"Ups!",
                        text:"No results found. Try later!",
                        icon:"warning",
                        button:"Ok!"
                    })
                }
            })
            .catch((error) => {
                console.log(error)
                Swal({
                    title:"titulo2",
                    text:"Sorry, there was an unexpected error. Try later!",
                    icon:"warning",
                    button:"Ok!"})
            })
            .finally(() => setLoading(false))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [itineraries, setItineraries] = useState([])

    useEffect (() => {
        axios
            .get("http://localhost:4000/api/itineraries")
            .then((res) => 
                setItineraries(res.data.response))
            .catch((err) =>
                console.log(err))
            .finally(() => 
                setLoading(false))
    }, [])

    if (loading) {
        <Loader/>
    }
    
    return (
        <>
            <div className="mainCity" style={{backgroundImage: `url("/assets/fotos/${city.img}")`,
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
                    <h2 className="titleCity">Welcome to {city.name}</h2>
                </div>
            </div>
                <Itineraries itineraries={itineraries}/>
            <Footer/>
        </>
    )
}

export default City