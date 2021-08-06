import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"

export default class Home extends React.Component {
    render() {
        return (
            <div className = "container" >
                <Header/>
                <CallToAction/>
                <Footer/>
        </div>
        ) 
    }
}
