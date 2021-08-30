const usersReducer = (state = {token: null, name: null, url: null, countries: []}, action) => {
    switch(action.type) {

    
                case "SIGNIN_INTO_SISTEM":
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem("name", action.payload.name);
                    localStorage.setItem("url", action.payload.url);
                    return {
                    token: action.payload.token,
                    name: action.payload.name,
                    url: action.payload.url,
                    };
            
                case "LOG_OUT":
                    localStorage.removeItem("token");
                    localStorage.removeItem("name");
                    localStorage.removeItem("url");
                    return {
                    token: null,
                    name: null,
                    url: null,
                    };

        // case 'SIGN_UP':
        //     localStorage.setItem('token', action.payload.token)
        //     localStorage.setItem('name', action.payload.name)
        //     localStorage.setItem('url', action.payload.url)
        //     return {
        //         token: true,
        //         name: action.payload.name,
        //         url: action.payload.url
        //     }

        // case 'SIGN_IN':
        //     localStorage.setItem('token', action.payload.token)
        //     localStorage.setItem('name', action.payload.name)
        //     localStorage.setItem('url', action.payload.url)
        //     return {
        //         token: true,
        //         name: action.payload.name,
        //         url: action.payload.url
        //     }

        // case 'SIGN_OUT':
        //     localStorage.removeItem('token')
        //     localStorage.removeItem('name')
        //     localStorage.removeItem('url')
        //     return {
        //         token: null,
        //         name: null,
        //         url: null,
        //     }

        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            }


        default:
            return state
    }
}

export default usersReducer