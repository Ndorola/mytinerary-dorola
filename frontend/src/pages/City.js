import { connect } from "react-redux";
import MainCity from "../components/MainCity";
import Footer from "../components/Footer";


const City = (props) => {

    const city = props.citiesList.find((city) => city._id === props.match.params.id)

    return (
        <div className = "mainBox">
            <MainCity {...props} city={city} />
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesList: state.cities.citiesList
    }
}

export default connect(mapStateToProps)(City)