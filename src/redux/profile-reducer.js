import {profileApi, userApi} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you', likeCount: 15},
        {id: 2, message: 'hi, what is up', likeCount: 10},
        {id: 3, message: 'hi, what is up', likeCount: 24},
        {id: 4, message: 'hi, what is up', likeCount: 24},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.text,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_PROFILE_USER:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: ADD_POST, text})
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const addPostApi = (data) => (dispatch) =>  {
    dispatch(addPostAC(data.message))
}

export const getProfile = (userId) => (dispatch) => {
    userApi.getProfile(userId).then(res => {
        dispatch(setProfileUser(res.data))
    })
}

export const getStatus = (userId) => (dispatch) =>  {
    profileApi.getStatus(userId).then(res => {
        dispatch(setStatus(res.data))
    })
}

export const updateStatus = (status) => (dispatch) =>  {
    profileApi.updateStatus(status).then(res => {
        if(res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer