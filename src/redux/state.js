let store = {
    _rerender() {
        console.log('changed')
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
            ]
        }
    },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    addNewPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerender(this._state)
    },
    changePostText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerender(this._state)
    },
    addNewMessage(newText) {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: newText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._rerender(this._state)
    }
}

export default store