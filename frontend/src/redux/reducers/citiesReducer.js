const citiesReducer = (state = {citiesList:[], searchedCities:[]}, action) => {

    switch(action.type) {
        case 'GET_ALL_CITIES':
            console.log('entre al reducer')
            return {
                ...state,
                citiesList: action.payload,
                searchedCities: action.payload
            }
        case 'FILTER_CITIES':
            return {
                ...state,
                searchedCities: state.citiesList.filter((city) => {
                    return city.name.toLowerCase()
                    .startsWith(action.payload.trim().toLowerCase())
                })
            }
        // case 'GET_CITY':
        //     return {
        //         ...state,
        //         city: state.citiesList.find((city) => city._id === props.match.params.id)
        //     }

        // case 'MODIFY_CITY':
        // case 'DELETE_CITY':
        // case 'UPDATE-CITY':
        
        default :
            return state
    }
}

export default citiesReducer