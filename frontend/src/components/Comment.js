
import { FaTelegramPlane } from "react-icons/fa"
import { useState, useRef } from "react"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesAction"

const Comment = (props) => {
    console.log(props)

    const comment = useRef()
    const [addComments, setAddComments] = useState(props.comments)
    
    const submitComments = async () => {
        if (!props.token){
            alert('te tenes que loguear')
        } else {
            try {
                let response = await props.createComment(props.itId, {comments: {comment:comment.current.value, user:props.userId}}, props.token)
                if(response.data.success) {
                    setAddComments(response.data.response)
                    console.log(addComments)
                } else {
                    throw new Error ('no funciono')
                }
            } catch (error) {
                console.log(error)
            }
            //     (
            //         <div>
            //         <div>
            //             <img id="user" src="/assets/user.img.jpg" alt="iconUser"/>
            //             <p>user.name</p>
            //         </div>
            //         <p>{comment}</p>
            //     </div>
            // ))
    }
}


return (
        <div className="commentsBox">
            {addComments.map((com) => {
                return (
                    <div className="containerComments">
                        <div>
                            <div>
                                <img id="user" src="/assets/user.img.jpg" alt="iconUser"/>
                                <p>{com.name}</p>
                                <p>{com.comment}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
                <div className="divInput">
                    <input
                    className="inputComment"
                    name="comment"
                    type="text"
                    placeholder="Add comment ..."
                    ref={comment}
                    />
                    <button id="btnComment" className="btnForm" onClick={submitComments} ><FaTelegramPlane/></button>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.users.userId,
        name: state.users.name,
        url: state.users.url,
        token: state.users.token
    }
}

const mapDispatchToProps = {
    createComment: itinerariesActions.addComment,
}

export default connect (mapStateToProps, mapDispatchToProps) (Comment)