export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", // this is type matching with reducer 
        payload: user // data updating
    }
}


/**
    ACTION CREATOR [ type, payload ]

    type => matching with reducer
    payload => data 
    payload possible another name like ayhaga

*/