let rerender = () => {
    console.log('changed')
}

let state = {
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
}

export let addNewPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerender(state)
}

export let changePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerender(state)
}


export let addNewMessage = (newText) => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message: newText
    }
    state.dialogsPage.messages.push(newMessage)
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer
}

export default state