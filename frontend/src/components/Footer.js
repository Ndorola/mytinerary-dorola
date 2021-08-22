import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="mainFooter">
                <div className="boxFooter">
                    <div>
                        <nav id="linksFooter">
                            <NavLink exact to = "/"><p>Home</p></NavLink>
                            <NavLink to = "/cities"><p>Cities</p></NavLink>
                            <NavLink to = "/signin"><p>Sign in</p></NavLink>
                            <NavLink to = "/signout"><p>Sign out</p></NavLink>
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

export default Footer

