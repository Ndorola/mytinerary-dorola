import {NavLink} from "react-router-dom"

const HeaderCities = () => {

    return (
        <header>
                <div className="headerCities">
                    <nav id="navBar">
                        <NavLink to = "/"><p>Home</p></NavLink>
                        <NavLink to = "/CITIES"><p>Cities</p></NavLink>
                        <NavLink to = "/LOGIN"><p>Sign up</p></NavLink>
                        <NavLink to = "/LOGOUT"><p>Log in</p></NavLink>
                    </nav>
                    <NavLink to = "/USER"><img id="user" src="/assets/iconUser.png" alt="iconUser"></img></NavLink>
                </div>
        </header>
    )
}
// style={{backgroundImage: "url('/assets/HeaderCities.jpg')"}}
export default HeaderCities