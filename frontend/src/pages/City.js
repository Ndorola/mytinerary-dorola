import axios from "axios"
import { useEffect, useState } from "react"

const City = (props) => {
    const[city, setCity] = useState({})
    console.log(city)
    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/cities/${props.match.params.id}`)
            .then(res => setCity(res.data.response))
    }, [])
    return (
        <>
            <div style={{
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url("/assets/fotos/${city.img}")`,
                    backgroundSize: "cover"
                }}>
            </div>
            <h1>{city.name}</h1>
        </>
    )
}

export default City