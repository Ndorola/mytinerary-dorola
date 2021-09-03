const usersReducer = (state = {token: null, name: null, url: null, userId: null, countries: []}, action) => {
    switch(action.type) {

    
                case "SIGNIN_INTO_SISTEM":
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem("name", action.payload.name);
                    localStorage.setItem("url", action.payload.url);
                    localStorage.setItem("userId", action.payload.userId);
                    return {
                    token: action.payload.token,
                    name: action.payload.name,
                    url: action.payload.url,
                    userId: action.payload.userId,
                    };
            
                case "LOG_OUT":
                    localStorage.removeItem("token");
                    localStorage.removeItem("name");
                    localStorage.removeItem("url");
                    localStorage.removeItem("userId");
                    return {
                    token: null,
                    name: null,
                    url: null,
                    userId: null,
                    };


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