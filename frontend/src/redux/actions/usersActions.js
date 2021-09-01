import axios from "axios";

const userActions = {

    signIn: (addUser) => {
        return async (dispatch) => {
        
            try {
                let response = await axios.post("http://localhost:4000/api/uses/signin", { ...addUser })           
                if (response.data.success) {
                    dispatch({
                    type: "SIGNIN_INTO_SISTEM",
                    payload: {
                        token: response.data.response.token,
                        name: response.data.response.name,
                        url: response.data.response.url
                    }
                    })
                    alert('you are logged')
                } else {
                    throw new Error ('Authentication Error'),
                    console.log('Authentication Error')
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    },
    
    signUp: (addUser) => {
        console.log('entre al action de ')
        return async (dispatch, getState) => {
        let response = await axios.post("http://localhost:4000/api/users/signup", { ...addUser });

        if (response.data.success) {
            dispatch({
            type: "SIGNIN_INTO_SISTEM",
            payload: {
                token: response.data.response.token,
                name: response.data.response.name,
                url: response.data.response.url
            },
            });
        }
        console.log('salgoooo')
        return response;
        };
    },

    logOut: () => {
        return (dispatch, getState) => {
        dispatch({ type: "LOG_OUT" });
        };
    },

    signInLS: (token) => {
        return async (dispatch, getState) => {
        try {
            let response = await axios.get('http://localhost:4000/api/verifytoken', {
                headers: {
                Authorization: 'Bearer ' + token
                }
            })
            dispatch({ type: "SIGNIN_INTO_SISTEM", payload: { token: token , name: response.data.name, url: response.data.url} });
            } catch(error) {
                console.log('texto')
            return dispatch({type: 'LOG_OUT'})
            }
            };
        },
}

export default userActions