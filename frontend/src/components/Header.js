import { connect } from "react-redux"
import React from "react"
import {NavLink} from "react-router-dom"
import userActions from "../redux/actions/usersActions"

const Header = (props) => {

    return (
        <>
            <div className="hero" style={{backgroundImage: "url('/assets/hero.png')"}}>
                <div className="containerHeader">
                    <nav id="navBar">
                        <NavLink to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/cities"><p>Cities</p></NavLink>
                        {!props.token && <NavLink to = "/signup"><p>Sign up</p></NavLink>}
                        {!props.token && <NavLink to = "/signin"><p>Sign in</p></NavLink>}
                        {props.token && <p className="pNav" onClick={() => props.signOut()}>Sign Out</p>}   
                    </nav>
                    <div className="userBox">
                        {props.token && <h5 className="welcomeUser">Welcome {props.name}!</h5>}
                        <NavLink to = "/user">{props.token ? <img id="user" src={`${props.url}`}/> : <img id="user" src="/assets/iconUser.png" alt="iconUser"/>}</NavLink>
                    </div>
                </div>
                <div className="boxTitle">
                    <div className="title">
                        <img id="logo" src="/assets/logo.png" alt="logo"></img>
                        <h4>Find your perfect trip, designed by insiders who know and love their cities!</h4>
                    </div>
                    <div className="boxHeroImg">
                        <img id="heroImg" src="/assets/travel.png" alt="plane"></img>
                    </div>
                </div>   
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        token: state.users.token,
        name: state.users.name,
        url: state.users.url,
        signOut: state.users.signOut
    }
}

const mapDispatchToProps = {
    signOut: userActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)