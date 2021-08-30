import { connect } from "react-redux"
import React from "react"
import {NavLink} from "react-router-dom"


const HeaderCities = (props) => {

    return (
            <>
                <div className="headerCities">
                    <nav id="navBar">
                        <NavLink exact to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/cities"><p>Cities</p></NavLink>
                        {!props.signIn && <NavLink to = "/signup"><p>Sign up</p></NavLink>}
                        {!props.signIn && <NavLink to = "/signin"><p>Sign in</p></NavLink>}
                        {props.signIn && <p className="pNav" onClick={() => props.signOut()}>Sign Out</p>}  
                    </nav>
                    <div className="userBox">
                        {props.signIn && <h5 className="welcomeUser">Welcome {props.name}!</h5>}
                        <NavLink to = "/user">{props.signIn ? <img id="user" src={`${props.url}`}/> : <img id="user" src="/assets/iconUser.png" alt="iconUser"/>}</NavLink>
                    </div>
                </div>
            </>
    )
}
const mapStateToProps = state => {
    return {
        signIn: state.users.token,
        name: state.users.name,
        url: state.users.url,
        signOut: state.users.logOut
    }
}

export default connect(mapStateToProps)(HeaderCities)