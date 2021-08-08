import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="mainFooter">
                <div className="boxfooter">
                    <nav id="linksFooter">
                        <NavLink exact to = "/"><p>HOME</p></NavLink>
                        <NavLink to = "/CITIES"><p>CITIES</p></NavLink>
                        <NavLink to = "/LOGIN"><p>LOGIN</p></NavLink>
                        <NavLink to = "/LOGOUT"><p>LOGOUT</p></NavLink>
                        <div className="socialMedia">
                            <Link to="/NotFound"><img src='/assets/instagram.png'></img></Link>
                            <Link to="/NotFound"><img src='/assets/facebook.png'></img></Link>
                            <Link to="/NotFound"><img src='/assets/mail.png'></img></Link>
                        </div>
                    </nav>
                </div>
                <div className="allRightReserves">miTinerary Proyect 2021 - All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer

