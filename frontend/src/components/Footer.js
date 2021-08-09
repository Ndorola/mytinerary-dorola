import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="mainFooter">
                <div className="boxFooter">
                    <div>
                        <nav id="linksFooter">
                            <NavLink exact to = "/"><p>HOME</p></NavLink>
                            <NavLink to = "/CITIES"><p>CITIES</p></NavLink>
                            <NavLink to = "/LOGIN"><p>LOGIN</p></NavLink>
                            <NavLink to = "/LOGOUT"><p>LOGOUT</p></NavLink>
                        </nav>
                    </div>
                    <div className="socialMedia">
                        <Link to="/NotFound"><img src='/assets/instagram.png' alt="instagram"></img></Link>
                        <Link to="/NotFound"><img src='/assets/facebook.png' alt="facebook"></img></Link>
                        <Link to="/NotFound"><img src='/assets/mail.png' alt="mail"></img></Link>
                    </div>
                </div>
                <div className="allRightReserves">miTinerary Proyect 2021 - All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer

