import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PhotoGrid = () => {
    
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get("http://localhost:4000/api/cities")
            .then((res) => 
                setCities(res.data.response))
                setLoading(false)
    }, [])

    if (loading) {
        <h1>Loading...</h1>
    }
    //poner preloader

    const [enteredCity, setenteredCity] = useState("")

    const captionCity = (e) => {
        setenteredCity(e.target.value);
    }
    // console.log(enteredCity)

    return (

        <div className="citiesBox">
            <div className="boxSearch">
                <input type="text" placeholder="Where would you like to go?" onChange = {captionCity}/>
            </div>

        

            {cities.map((city) => {

                return (
                    city.name.toLowerCase().startsWith(enteredCity.trim().toLowerCase()) && 

                    <Link to={`/city/${city.id}`}>
                        <div className="photoParent" key={city.name} >
                            <div className="photoChild" style={{backgroundImage: `url("/assets/fotos/${city.img}")`}}>
                                <h3>{city.name}</h3>
                                <h4>{city.description}</h4>
                            </div>
                        </div>
                    </Link>
                    
                )
            }
                )}
        </div>
    )        
}
export default PhotoGrid;
