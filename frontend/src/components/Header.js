import {NavLink} from "react-router-dom"

const Header = () => {

    return (
        <>
            <div className="hero" style={{backgroundImage: "url('/assets/hero.png')"}}>
                <div className="containerHeader">
                    <nav id="navBar">
                        <NavLink to = "/"><p>HOME</p></NavLink>
                        <NavLink to = "/CITIES"><p>CITIES</p></NavLink>
                        <NavLink to = "/LOGIN"><p>LOGIN</p></NavLink>
                        <NavLink to = "/LOGOUT"><p>LOGOUT</p></NavLink>
                    </nav>
                    <NavLink to = "/USER"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
                </div>
                <div className="boxTitle">
                    <div className="title">
                        <img id="logo" src="/assets/logo.png" alt="logo"></img>
                        <h4>Find your perfect trip, designed by insiders who know and love their cities!</h4>
                    </div>
                    <div>
                        <img id="plane" src="/assets/avion1.png" alt="plane"></img>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Header