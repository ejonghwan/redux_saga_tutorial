export const initialState = {
    loading: false,
    user: [],
    error: '',
}


const reducer = (state = initialState, action) => {

    console.log('reducer action?', action)

    switch(action.type) {
        case "USER_LOAD_REQUEST" : 
            return {
                ...state,
                loading: true,
            }

        case "USER_LOAD_SUCCESS" : 
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case "USER_LOAD_FAILUE" : 
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default : 
            return {
                ...state
            }
    }
}


export default reducer;

