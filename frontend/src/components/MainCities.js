import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Swal from 'sweetalert';
import Loader from "./Loader";

const MainCities = (props) => {
    
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        window.scrollTo(0,0)
        async function getCities() {
            try{
                await props.getCities()
            } catch(error) {
                Swal({
                    title:"Oops! There was a mistake.",
                    text:"The link you selected may be broken or the page may have been removed.",
                    icon:"warning",
                    button:"Ok!",
                })
                props.history.push('/')
                return false
            }
            setLoading(false)

        }
        getCities()
    }, [])

    if (loading) {
        return <Loader/>
    }

    const captionCity = (e) => {
        props.filterCities(e.target.value)
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
            {(props.searchedCities.length !== 0) ? props.searchedCities.map ((city, index) => {
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
            }) : <div className="ups">
                    <img src="/assets/ups.png"/>
                    <h3 className="sorry">Sorry, that city was not found. Try again!</h3>
                </div>
            }           
        </div>      
    )        
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.citiesList,
        searchedCities: state.cities.searchedCities,
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCities)