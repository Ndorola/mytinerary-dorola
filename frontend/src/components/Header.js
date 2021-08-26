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
                        {!props.signIn && <NavLink to = "/signup"><p>Sign up</p></NavLink>}
                        {!props.signIn && <NavLink to = "/signin"><p>Sign in</p></NavLink>}
                        {!props.signIn && <p onClick={() => props.signOut()}>Sign Out</p>}
                    </nav>
                    <div className="userBox">
                    <h5 className="welcomeUser">Welcome {props.signIn && props.name}!</h5>
                    <NavLink to = "/user"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
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
        signIn: state.users.signIn,
        name: state.users.name
    }
}

const mapDispatchToProps = {
    signOut: userActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)