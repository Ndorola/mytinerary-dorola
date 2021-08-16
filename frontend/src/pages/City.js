import axios from "axios"
import { useEffect, useState } from "react"

const City = (props) => {
    const[city, setCity] = useState({})
    console.log(city)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/cities/${props.match.params.id}`)
            .then((res) => {
                if (res.data.response) {
                    setCity(res.data.response)
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