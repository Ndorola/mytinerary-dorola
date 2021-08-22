import axios from "axios"

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch) => {
                let response = await axios.get('http://localhost:4000/api/itineraries/')
                let data = response.data.response
                dispatch({type: 'GET_ALL_ITINERARIES', payload: data})
                console.log(response.data.response)
        }
    }
}

export default itinerariesActions