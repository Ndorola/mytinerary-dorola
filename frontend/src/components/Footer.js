import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import { connect } from "react-redux"

const Footer = (props) => {
    return (
        <>
            <div className="mainFooter">
                <div className="boxFooter">
                    <div>
                        <nav id="linksFooter">
                            <NavLink exact to = "/"><p>Home</p></NavLink>
                            <NavLink to = "/cities"><p>Cities</p></NavLink>
                            {!props.signIn && <NavLink to = "/signup"><p>Sign up</p></NavLink>}
                            {!props.signIn && <NavLink to = "/signin"><p>Sign in</p></NavLink>}
                            {props.signIn && <p className="pNav" onClick={() => props.signOut()}>Sign Out</p>} 
                        </nav>
                    </div>
                    <div className="allRightReserves">myTinerary Proyect 2021 - All Rights Reserved</div>
                    <div className="socialMedia">
                        <Link to="/notfound"><img src='/assets/instagram.png' alt="instagram"></img></Link>
                        <Link to="/notfound"><img src='/assets/facebook.png' alt="facebook"></img></Link>
                        <Link to="/notfound"><img src='/assets/mail.png' alt="mail"></img></Link>
                    </div>
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
        signOut: state.users.signOut
    }
}

export default connect(mapStateToProps)(Footer)

