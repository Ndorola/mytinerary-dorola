import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainHome from "../components/MainHome"

export default class Home extends React.Component {
    render() {
        return (
            <div className = "mainBox" >
                <Header/>
                <MainHome/>
                <Footer/>
            </div>
        ) 
    }
}
