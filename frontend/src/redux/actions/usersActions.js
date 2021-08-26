import axios from "axios";
// import { get } from "mongoose";

const userActions = {
    signIn: (userLog) => {
        return async (dispatch) => {
            let response = await axios.post('http://localhost:4000/api/users/signin', {...userLog})
            let data = response.data.response
            dispatch({type: 'SIGN_IN', payload: data})
            if (!response.data.success) {
                throw new Error ('Ups! Sign in failed')
            }
        }
    },
    signUp: (addUser) => {
        return async (dispatch) => {
            let response = await axios.post('http://localhost:4000/api/users/signup', {...addUser})
            let data = response.data.response
            dispatch({type: 'SIGN_UP', payload: data})
            if (!response.data.success) {
                throw new Error ('Ups! Sign up failed')
            }
        }
    },
    getCountries: () => {
        return async (dispatch) => {
            let response = await axios.get('https://restcountries.eu/rest/v2/#')
            let data = response.data
            dispatch({type: 'GET_COUNTRIES', payload: data})
            if (!response.data.success) {
                throw new Error ('Ups! select failed')
            }
        }
    }
}

export default userActions