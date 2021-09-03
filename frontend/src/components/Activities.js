
const Activities = (props) => {
    console.log(props)

    let activitiesByIt = props.activities.activities
    console.log(activitiesByIt) 

    return (

            <div className="picsAct">   
                <div className="wrapper">
                    {activitiesByIt.map((activity => (
                        <div key={activity._id} >
                            <img src={`/assets/activities/${activity.img}`} />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{activity.title}</h5>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    )

}

export default Activities
