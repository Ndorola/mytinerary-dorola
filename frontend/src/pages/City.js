import { connect } from "react-redux";
import MainCity from "../components/MainCity";
import Footer from "../components/Footer";


const City = (props) => {

    const city = props.citiesList.find((city) => city._id === props.match.params.id)

    return (
        <>
            <MainCity {...props} city={city} />
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