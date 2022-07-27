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
    ],
    updateMessageText: 'ssads'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.updateMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                updateMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT :
            return {
                ...state,
                updateMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const updateMessageTextAC = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export default dialogsReducer