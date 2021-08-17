import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <div className="imgError">
                <img src='/assets/error_404.png' alt="Error 404" ></img>
                <div className="btn404Box">
                    <Link to = "/"><button className="btn404">Back to Home!</button></Link>
                </div>
            </div>
        </>
    )
}

export default NotFound