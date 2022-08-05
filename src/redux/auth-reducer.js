import {authApi, userApi} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA'
let SET_ERRORS = 'SET_ERRORS'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    errors: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: [...action.errors]
            }
        default:
            return state
    }
}

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}})
export const setErrors = (errors) => ({type: SET_ERRORS, errors})

export const getAuth = () => (dispatch) => {
    return authApi.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, login, email, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                dispatch(setErrors(res.data.messages))
            }
        })
}

export const loginOut = () => (dispatch) => {
    authApi.loginOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export default authReducer