import HeaderCities from "../components/HeaderCities"
import MainCities from "../components/MainCities"
import Footer from "../components/Footer"

const Cities = (props) => {

        return (
            <div className = "mainCities" >
                <HeaderCities/>
                <MainCities {...props}/>
                <Footer/>
            </div>
        ) 
    }

export default Cities