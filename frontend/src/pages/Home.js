import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import Carrousel from "../components/Carrousel"

export default class Home extends React.Component {
    render() {
        return (
            <div className = "mainBox" >
                <Header/>
                <CallToAction/>
                <h2 className="titleSlider">Popular myTineraries</h2>
                <Carrousel/>
                <Footer/>
        </div>
        ) 
    }
}
