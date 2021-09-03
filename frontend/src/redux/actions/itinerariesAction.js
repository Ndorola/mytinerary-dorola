import axios from "axios"

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch) => {
                let response = await axios.get('http://localhost:4000/api/itineraries/')
                let data = response.data.response
                dispatch({type: 'GET_ALL_ITINERARIES', payload: data})
                if (!response.data.success) {
                    throw new Error ('Ups! The server is down'),
                    console.log('Ups! The server is down')
                }
        }
    },

    getActivities: (id) => {
        return async (dispatch) => {
                let response = await axios.get(`http://localhost:4000/api/activities/${id}`)
                let data = response.data.response
                return data
                // if (!response.data.success) {
                //     throw new Error ('Ups! The server is down'),
                //     console.log('Ups! The server is down')
                // }
        }
    },

    addLike: (itId, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/likes/${itId}`,{} ,
                {
                    headers:{
                        Authorization: 'Bearer ' + token
                    }
                })
                if(response.data.success){
                    console.log(response.data.response)
                    return({success:true, response: response.data.response})
                } else {
                    console.log(response.data.response)
                    return({success: false})
                }

            } catch (error) {
                return({success:false, response:error.message})
            }
        }
    },

    addComment: (id, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${id}`, {comment, 
                headers:{
                    Authorization: 'Bearer ' +token
                }})
                return response
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions