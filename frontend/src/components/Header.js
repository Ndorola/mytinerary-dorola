import {NavLink} from "react-router-dom"

const Header = () => {

    return (
        <>
            <div className="hero" style={{backgroundImage: "url('/assets/hero.png')"}}>
                <div className="containerHeader">
                    <nav id="navBar">
                        <NavLink to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/Cities"><p>Cities</p></NavLink>
                        <NavLink to = "/Login"><p>Sign up</p></NavLink>
                        <NavLink to = "/Logout"><p>Log in</p></NavLink>
                    </nav>
                    <NavLink to = "/USER"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
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

export default Header