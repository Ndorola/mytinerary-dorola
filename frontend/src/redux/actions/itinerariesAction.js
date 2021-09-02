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

    addLike: (id, value) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/likes/${id}`, value)
                return response
            } catch (error) {
                console.log(error)
            }
        }
    },

    addComment: (id, comment) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${id}`, comment)
                return response
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions