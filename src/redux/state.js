import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _rerender() {
        console.log('changed')
    },
    subscribe(observer) {
        this._rerender = observer
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you', likeCount: 15},
                {id: 2, message: 'hi, what is up', likeCount: 10},
                {id: 3, message: 'hi, what is up', likeCount: 24},
                {id: 4, message: 'hi, what is up', likeCount: 24},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },

    addNewMessage(newText) {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: newText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._rerender(this._state)
    }, // dialogs

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerender(this._state)
        // if (action.type === ADD_POST) { // profile
        //     let newPost = {
        //         id: this._state.profilePage.posts.length + 1,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._rerender(this._state)
        // } else if (action.type === UPDATE_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._rerender(this._state)
        // } else if (action.type === UPDATE_MESSAGE_TEXT) { // dialogs
        //     this._state.dialogsPage.updateMessageText = action.newText
        //     this._rerender(this._state)
        // } else if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: this._state.dialogsPage.messages.length + 1,
        //         message: this._state.dialogsPage.updateMessageText
        //     }
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.updateMessageText = ''
        //     this._rerender(this._state)
        // }
    }
}




window.state = store
export default store