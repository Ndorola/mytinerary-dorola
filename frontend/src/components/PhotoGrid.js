import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PhotoGrid = () => {
    
    const [cities, setCities] = useState([])
    const [allCities, setAllCities] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get("http://localhost:4000/api/cities")
            .then((res) => {
                setCities(res.data.response)
                setAllCities(res.data.response)
                setLoading(false)
            })    
    }, [])

    if (loading) {
        <h1>Loading...</h1>
    }
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

    return (

        <div className="citiesBox">
            <div className="boxSearch">
                <input type="text" placeholder="Where would you like to go?" onChange = {captionCity}/>
            </div>
        {console.log(cities)}
            {cities.length > 0 ?
            
                cities.map ((city, index) => {
                    return (
                        <Link key={index} to={`/city/${city._id}`}>
                        <div className="photoParent">
                            <div className="photoChild" style={{backgroundImage: `url("/assets/fotos/${city.img}")`}}>
                                <h3>{city.name}</h3>
                                <h4>{city.description}</h4>
                            </div>
                        </div>
                    </Link>
                    )
                }) : <h3>No hay ciudades!!!</h3>
            }   
        </div>
        
    )        
}
export default PhotoGrid;

// const MainCities =  () => {
//     const [lugaresD, setLugares] = useState ('')
//     const [ciudades, setCiudades] = useState ([])
//     const [carga, setCarga] = useState (true)
//     useEffect (() => {
//          axios
//         .get('http://localhost:4000/api/cities')
//         .then((res) => {
//             res.data.success
//               ? setCiudades(res.data.response)
//               : console.log(res.data.response);
//           })
//           .catch((err) => console.log(err));
//           setCarga(false);
//       }, []);
    
//     if (carga) {
//         return <h3>Loading ...</h3>
//     } 

//     const capturadeHandler = (e) => {
//         setLugares(e.target.value)
//     }
// return(
//     <>
//         <input type='text' placeholder='Search...' onChange= {capturadeHandler} />
//         <div className="contenedorImagen">
//             {ciudades.map((lugar => ( lugar.nombre.toLowerCase().startsWith(lugaresD.toLowerCase().trim()) &&
//             <Link to={`/city/${lugar._id}`} key={lugar.nombre} classnombre='fotosCities' style={{backgroundImage: `url('/assets/${lugar.src}')`}}> 
//                 <h5>{lugar.nombre}</h5>
//             </Link>
//         )
//         )  
//         )} 
        
//         {/* : (
//             <h3>The city you were looking for was not found</h3>
//         ) */}

//         </div>
//     </>
// )
// }

// export default MainCities