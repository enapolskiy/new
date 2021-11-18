let store = {
    _state : {
        dialogsPage: {
            sendData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "John"},
                {id: 3, name: "Mike"},
                {id: 4, name: "Vincent"},
                {id: 5, name: "Sonya"},
            ],
            messageData: [
                {id: 1, message: "Hi! How are you?"},
                {id: 2, message: "Im fine. what about you?"},
                {id: 3, message: "Oy! im very glad to see you"},
                {id: 4, message: "Cool site!!"},
                {id: 5, message: "Cool site eah!!"}
            ],
            newm:''
        },
        chatPage: {
            chatMessage: [
                {id: 1, message: "Hi! how are you?32", like: "likes 12"},
                {id: 2, message: "Its my first post77!", like: "likes 22"},
                // {id: 3, message: "Hi! how are you?6767", like: "likes 12"},
                // {id: 4, message: "Its my first post!&^", like: "likes 22"}
            ],
            newp:''
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber  ()  {
        console.log("trertre")
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },
    // addPost  (postMessage)  {
    //     let newPost = {
    //         id:2,
    //         message: this._state.chatPage.newp,
    //         like:0
    //     }
    //     this._state.chatPage.chatMessage.push(newPost);
    //     this._state.chatPage.newp=('');
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText  (newPostText)  {
    //     this._state.chatPage.newp=newPostText;
    //     this._callSubscriber(this._state)
    // },
    // addMessage (dialogMessage) {
    //     let newMessage = {
    //         id:2,
    //         message: this._state.dialogsPage.newm
    //     }
    //     this._state.dialogsPage.messageData.push(newMessage)
    //     this._state.dialogsPage.newm= ('');
    //     this._callSubscriber(this._state)
    // },
    // updateMessageText  (newText) {
    //     this._state.dialogsPage.newm = newText;
    //     this._callSubscriber(this._state)
    // },
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id:2,
                message: this._state.chatPage.newp,
                like:0
            }
            this._state.chatPage.chatMessage.push(newPost);
            this._state.chatPage.newp=('');
            this._callSubscriber(this._state);

        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.chatPage.newp=action.newPostText;
            this._callSubscriber(this._state)
        }

        if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id:2,
                message: this._state.dialogsPage.newm
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.newm= ('');
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newm = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export  default store;