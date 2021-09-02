
import { FaTelegramPlane } from "react-icons/fa"
import { useState } from "react"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesAction"

const Activities = (props) => {
    console.log(props)
    
    let activitiesByIt = props.activities.activities
    console.log(activitiesByIt) 

    const [comment, setComment] = useState("")
    const [addComments, setAddComments] = useState([])

    const inputChange = (e) => {
        setComment(e.target.value)
    }
    console.log(comment)

    const functionComments = () => {
        setAddComments( [...comment] && 
            (
                <div>
                    <div>
                        <img id="user" src="/assets/user.img.jpg" alt="iconUser"/>
                        <p>user.name</p>
                    </div>
                    <p>{comment}</p>
                </div>
            ))
    }

    // const enterComment = async () => {
    //     let response = await props.createComment(props.itinerary._id {comments: comment, user:})
    // }

    return (
        <>  
            <div className="commentsBox">
                <div className="containerComments">
                    {addComments}
                </div>
                <div className="divInput">
                    <input
                    className="inputComment"
                    name="comment"
                    type="text"
                    placeholder="Add comment ..."
                    onChange={inputChange}
                    />
                    <button id="btnComment" className="btnForm" onClick={functionComments} ><FaTelegramPlane/></button>
                </div>
            </div>
            <div className="picsAct">   
                <div className="wrapper">
                    {activitiesByIt.map((activity) => (
                            <div key={activity._id} className="item">
                                <div className="polaroid">
                                    <img src={`/assets/activities/${activity.img}`}/>
                                    <div className="caption">{activity.title}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        
            
        </>
    )

}

const mapDispatchToProps = {
    createComment: itinerariesActions.addComment,
}

export default connect (null, mapDispatchToProps) (Activities)
