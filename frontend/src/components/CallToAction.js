import {Link} from "react-router-dom"

const CallToAction = () => {

    return (
        <>
            <div className="buttonSection" style={{backgroundImage: "url('/assets/CallToAction.png')"}}>
                <div className="buttonContainer">
                    <h2>What are you waiting for?</h2>
                    <h4>Feel free to check our itineraries and activities!</h4>
                    <Link to="/Cities"><button>GO THERE!</button></Link>
                </div>
            </div>
        </>
    )
}

export default CallToAction