const INTIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload // user
            }
        default:
            return state
    }
}

export default UserReducer


/**
    REDUCER => prevState, Action[ type, payload ]
    make type from action and use prev state so update this data[ state ]

*/