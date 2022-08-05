import {getAuth} from "./auth-reducer";

const SET_INITIALAZED = 'SET_INITIALAZED'

let initialState = {
    initialazed: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALAZED:
            return {
                ...state,
                initialazed: true
            }
        default:
            return state
    }
}

const setInitialazed = () => ({type: SET_INITIALAZED})

export const getInitialazed = () => (dispatch) => {
    let promiseAuth = dispatch(getAuth())
    promiseAuth.then(() => {
        dispatch(setInitialazed())
    })
}

export default appReducer