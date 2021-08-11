import React from "react"
import HeaderCities from "../components/HeaderCities"
import MainCities from "../components/MainCities"
import Footer from "../components/Footer"

export default class Cities extends React.Component {
    render() {
        return (
            <div className = "mainCities" >
                <HeaderCities/>
                <MainCities/>
                <Footer/>
            </div>
        ) 
    }
}
