import axios from "axios"

const citiesActions = {
    getCities: () => {
        return async (dispatch) => {
            console.log('entre al action')
                let response = await axios.get('http://localhost:4000/api/cities')
                let data = response.data.response
                dispatch({type: 'GET_ALL_CITIES', payload: data})
        }
    },
    //             if (!response.data.seccess) {
    //                 throw new Error ('Ups! The server is down'),
    //                 console.log('Ups! The server is down')
    //             }
    filterCities: (value) => {
        return (dispatch) => {
            dispatch({type:'FILTER_CITIES', payload: value})
        }
    },
    // getCity: () => {
    //     return (dispatch) => {
    //         dispatch({type:'GET_CITY', payload: data})
    //     }
    // }
}

export default citiesActions