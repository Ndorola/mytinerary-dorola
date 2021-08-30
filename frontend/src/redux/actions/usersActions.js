import axios from "axios";

const userActions = {

    signIn: (addUser) => {
        console.log("lo que sea")
        return async (dispatch) => {
        let respuesta = await axios.post(
            "http://localhost:4000/api/users/signin",
            { ...addUser }
        );
        console.log(respuesta)
        if (respuesta.data.success) {
            dispatch({
            type: "SIGNIN_INTO_SISTEM",
            payload: {
                token: respuesta.data.response.token,
                name: respuesta.data.response.name,
                url: respuesta.data.response.url
            }
            });
        }
        return respuesta;
        };
    },
    
    signUp: (addUser) => {
    
        return async (dispatch, getState) => {
        let respuesta = await axios.post(
            "http://localhost:4000/api/users/signup",
            { ...addUser }
        );

        if (respuesta.data.success) {
            dispatch({
            type: "SIGNIN_INTO_SISTEM",
            payload: {
                token: respuesta.data.response.token,
                name: respuesta.data.response.name,
                url: respuesta.data.response.url
            },
            });
        }

        return respuesta;
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
            let respuesta = await axios.get('http://localhost:4000/api/verifytoken', {
                headers: {
                Authorization: 'Bearer ' + token
                }
            })
            console.log(respuesta)
            dispatch({ type: "SIGNIN_INTO_SISTEM", payload: { token: token , name: respuesta.data.name, url: respuesta.data.url} });
            } catch(error) {
                console.log('texto')
            return dispatch({type: 'LOG_OUT'})
            }
            };
        },
}

export default userActions