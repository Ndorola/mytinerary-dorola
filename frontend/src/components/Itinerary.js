import React from "react"
import { useState, useEffect } from "react"
import { FcCurrencyExchange } from "react-icons/fc"
import { FcClock } from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"
import Activities from "./Activities"
import Comment from "./Comment"
import { connect } from "react-redux";
import Loader from "./Loader"
import Swal from 'sweetalert';
import itinerariesActions from "../redux/actions/itinerariesAction"

const Itinerary = (props) => {
    console.log(props)
    const [activities, setActivities] = useState({activities: []})
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false)
    
    const it = props.it
    const city = props.city

    const [liked, setLiked] = useState(it.likes)
    const [likedColor, setLikedColor] = useState(false)
    
    const icons = [1, 2, 3, 4, 5]
    let quantityIcons  = icons.splice(0,it.price)

    useEffect(() => {
        if(visible) {
            async function getActivities() {
                try{
                    let response = await props.getActivities(it._id)
                    setActivities(response)
                } catch(error) {
                    Swal({
                        title:"Oops! There was a mistake.",
                        text:"The link you selected may be broken or the page may have been removed.",
                        icon:"warning",
                        button:"Ok!",
                    })
                }
                setLoading(false)
            }
            getActivities()
        }
    }, [visible])
    
    if (loading) {
        <Loader/>
    }
    
    const toggleInfo = () => {
        setVisible(!visible)
    }

    const toggleLike = async () => {
        if (!props.token){
            alert('te tenes que loguear')
        } else {
            try {
                let response = await props.addLike(props.it._id, props.token)
                if(response.success) {
                    setLiked(response.response)
                    setLikedColor(true)
                } else {
                    throw new Error ('no funciono')
                }
            } catch (error) {
                console.log(error)
            }
            
        }

        // liked ? setLiked(false) : setLiked(true)
    }

    const changeIcon = liked ? <FcLike/> : <FcLikePlaceholder/>
    // const changeIcon = liked.includes(it._id) ? <FcLike/> : <FcLikePlaceholder/>

    return (
            <>      
                <div className="itContainer">
                    <div className="itMain">
                        <div className="itImage" style={{backgroundImage: `url("/assets/itineraries/${it.itinerary.img}")`}}></div>
                        <div className="itBox">
                            <div className="itUser">
                                <img src={`/assets/itineraries/${it.user.img}`}/>
                                <p>{it.user.name}</p>
                            </div>
                            <div className="itTitle">
                                <h3>{it.itinerary.title}</h3>
                                <p>{it.itinerary.description}</p>
                            </div>
                            <div className="itHashtags">
                            {it.hashtags.map((hashtag, index) => (
                                <p key={index}>{hashtag}</p>
                            ))}
                            </div>
                            <div className="iconsBox">
                                <div className="itIcons">
                                    <p>Price: </p>
                                    {quantityIcons.map((icon, index) => <p key={index}><FcCurrencyExchange/></p>)}
                                </div>
                                <div className="itIcons">
                                    <p><FcClock/></p>
                                    <p>{it.time} hours</p>
                                </div>
                                <div className="itIcons">
                                    <button className="btnLike" onClick={toggleLike}>{changeIcon}</button>
                                    <p>{liked.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="activitiesBox">
                            <div className="itButton">
                                {visible?
                                <div className="viewMoreBox">
                                    <div>   
                                        <h2 className="titleActivities">Activities to do in {city}</h2>
                                    </div>
                                    <div className="under">
                                        <Comment itId={it._id} comments={it.comments}/>
                                        <Activities activities={activities}/>
                                    </div>
                                </div>
                                : null}
                                <button className="btnUnder" onClick={toggleInfo}>
                                    {!visible ? "View More" : "View Less"}
                                </button>
                            </div>
                        </div>
                    </div> 
                </>
                )
            }

const mapStateToProps = state => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {
    getActivities: itinerariesActions.getActivities,
    addLike: itinerariesActions.addLike,
    addComment: itinerariesActions.addComment,
}

export default connect (mapStateToProps, mapDispatchToProps) (Itinerary)