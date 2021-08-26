const usersReducer = (state = {signIn: false, name: null, countries: []}, action) => {
    switch(action.type) {
        case 'SIGN_UP':
            return {
                signIn: true,
                name: action.payload.name
            }
            // alert('Congratulations ' + action.payload.name + ', you are already registered!')
            // console.log(action.payload.name)
            
        case 'SIGN_IN':
            return {
                signIn: true,
                name: action.payload.name
            }
            // alert('Welcome ' + action.payload.name + '!')
        
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            }

        case 'SIGN_OUT':
            return {
                signIn: false,
                name: null
            }

        default:
            return state
    }
}

export default usersReducer