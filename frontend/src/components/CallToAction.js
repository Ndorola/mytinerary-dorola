import {NavLink} from "react-router-dom"

const CallToAction = () => {

    return (
        <>
            <div className="buttonSection">
                <img src='/assets/CallToAction.png' alt="imgButton"></img>
                <div className="buttonContainer">
                    <h2>What are you waiting for?</h2>
                    <h4>Feel free to check our itineraries and activities!</h4>
                    <NavLink to="/Cities"><button>GO THERE!</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default CallToAction