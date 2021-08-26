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
                        {!props.signIn && <p onClick={() => props.signOut()}>Sign Out</p>}
                    </nav>
                    <div className="userBox">
                        <h5 className="welcomeUser">Welcome {props.signIn && props.name}!</h5>
                        <NavLink to = "/user"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
                    </div>
                </div>
            </>
    )
}
const mapStateToProps = state => {
    return {
        signIn: state.users.signIn,
        name: state.users.name,
        signOut: state.users.signOut
    }
}

export default connect(mapStateToProps)(HeaderCities)