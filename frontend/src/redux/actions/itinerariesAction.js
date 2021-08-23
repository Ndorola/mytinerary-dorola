import axios from "axios"

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch) => {
                let response = await axios.get('http://localhost:4000/api/itineraries/')
                let data = response.data.response
                dispatch({type: 'GET_ALL_ITINERARIES', payload: data})
                if (!response.data.seccess) {
                    throw new Error ('Ups! The server is down'),
                    console.log('Ups! The server is down')
                }
        }
    }
}

export default itinerariesActions