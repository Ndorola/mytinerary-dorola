import { connect } from "react-redux";
import MainCity from "../components/MainCity";
import Footer from "../components/Footer";

const City = (props) => {
    
    return (
        <>
            {props.citiesList.map((city, index) => {
                if (city._id === props.match.params.id) {
                    return <MainCity key={index} city={city} />
                }
            })}
            <Footer/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        citiesList: state.cities.citiesList
    }
}

export default connect(mapStateToProps)(City)