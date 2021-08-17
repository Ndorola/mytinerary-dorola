import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Swal from 'sweetalert';


const PhotoGrid = () => {
    
    const [cities, setCities] = useState([])
    const [allCities, setAllCities] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/cities")
            .then((res) => {
                if(res.data.success) {
                    setCities(res.data.response)
                    setAllCities(res.data.response)
                } else {
                    console.log(res.data.response)
                    Swal({
                        title:"Ups!",
                        text:"No results found. Try later!",
                        icon:"warning",
                        button:"Ok!"
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                Swal({
                    title:"Ups!",
                    text:"Sorry, there was an unexpected error. Try later!",
                    icon:"warning",
                    button:"Ok!"
                })
            })
            .finally(() => setLoading(false))
            
    }, [])

    //poner preloader

        const captionCity = (e) => {
        setSearch(e.target.value);
        console.log("Search "+ e.target.value);
    }

    useEffect(() => {
        var searchResult = allCities.filter((city) => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
                setCities(searchResult)
                console.log(cities)                  
            }, [search])

    if (loading) {
        return <Loader/>
    }

    if (cities.length !== 0) {
    var finalCity = cities.map ((city, index) => {
        return (
            <Link key={index} to={`/city/${city._id}`}>
                <div className="photoParent">
                    <div className="photoChild" style={{backgroundImage: `url("/assets/fotos/${city.img}")`}}>
                        <h3>{city.name}</h3>
                        <h4>{city.features}</h4>
                    </div>
                </div>
            </Link>
        )
    })} else { 
        var finalCity =
        <div className="ups">
            <img src="/assets/ups.png"/>
            <h3 className="sorry">Sorry, that city was not found. Try again!</h3>
        </div>
    }

    return (

        <div className="citiesBox">
            <div>
                <h4 className="searchH4">Find Your Adventure!</h4>
            </div>
            <div className="boxSearch">
                <img src={"/assets/barSearch.png"}/>
                <input type="text" placeholder="Where would you like to go?" onChange = {captionCity}/>
            </div>
            {finalCity}           
        </div>      
    )        
}
export default PhotoGrid;