const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you', likeCount: 15},
        {id: 2, message: 'hi, what is up', likeCount: 10},
        {id: 3, message: 'hi, what is up', likeCount: 24},
        {id: 4, message: 'hi, what is up', likeCount: 24},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE_USER:
        return {
            ...state, profile: action.profile
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostTextAC = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile})

export default profileReducer