
import { FaTelegramPlane } from "react-icons/fa"
import { useState } from "react"

const Activities = ({activities}) => {


    console.log(activities)

    const [comments, setComments] = useState({})

    const inputChange = (e) => {
        setComments({
            ...comments,
            [e.target.name] : e.target.value
        })
    }
    console.log(comments)

    let activitiesByIt = activities.activities

    return (
        <>  
            <div className="commentsBox">
                <div className="containerComments">
                    <p>comments</p>
                </div>
                <div className="divInput">
                    <input
                    className="inputComment"
                    name="comment"
                    type="text"
                    placeholder="Add comment ..."
                    onChange={inputChange}
                    />
                    <button id="btnComment" className="btnForm" ><FaTelegramPlane/></button>
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

export default Activities

{/* {it.hashtags.map((hashtag, index) => (
    <p key={index}>{hashtag}</p>
))} */}