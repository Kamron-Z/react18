const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ahmad'},
        {id: 2, name: 'Damir'},
        {id: 3, name: 'Karim'}
    ],
    messages: [
        {id: 1, message: 'Lorem ipsum dolor.'},
        {id: 2, message: 'Lorem ipsum dolor.'},
        {id: 3, message: 'Lorem ipsum dolor.'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.text
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const addMessageAC = (text) => ({type: ADD_MESSAGE, text})
export const updateMessageTextAC = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export const addMessageApi = (text) => (dispatch) => {
    dispatch(addMessageAC(text.message))
}

export default dialogsReducer