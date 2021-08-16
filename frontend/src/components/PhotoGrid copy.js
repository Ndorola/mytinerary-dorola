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
            .then((res) => {
                if (res.data.response) {
                    setCities(res.data.response)
                } else {
                    alert(res.data.response)
                }
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        <h1>Loading...</h1>
    }
    //poner preloader

    const [enterCity, setEnterCity] = useState("")

    const captionCity = (e) => {
        setEnterCity(e.target.value);
    }
    // console.log(enterCity)

    return (

        <div className="citiesBox">
            <div className="boxSearch">
                <input type="text" placeholder="Where would you like to go?" onChange = {captionCity}/>
            </div>

        
            
            {cities.map((city) => {

                return (
                    city.name.toLowerCase().startsWith(enterCity.trim().toLowerCase()) ? 

                    <Link to={`/city/${city._id}`}>
                        <div className="photoParent" key={city.name} >
                            <div className="photoChild" style={{backgroundImage: `url("/assets/fotos/${city.img}")`}}>
                                <h3>{city.name}</h3>
                                <h4>{city.description}</h4>
                            </div>
                        </div>
                    </Link>

                    :

                    <h3>QUE FUNCIONE ESTA CACA!!!</h3>
                    
                )
            }
                )}
        </div>
    )        
}
export default PhotoGrid;

