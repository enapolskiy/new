import {rerenderEntireTree} from "../render";

let state = {
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
}
export let addPost = (postMessage) => {
    let newPost = {
        id:2,
        message:postMessage,
        like:0
    }
    state.chatPage.chatMessage.push(newPost);
    state.chatPage.newp=('');
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newPostText) => {
    state.chatPage.newp=newPostText;
    rerenderEntireTree(state)
}

export let addMessage = (dialogMessage) =>{
    let newMessage = {
        id:2,
        message: dialogMessage
    }
    state.dialogsPage.messageData.push(newMessage)
    state.dialogsPage.newm= ('');
    rerenderEntireTree(state)
}

export let updateMessageText = (newText) =>{
    state.dialogsPage.newm = newText;
    rerenderEntireTree(state)
}




export  default state;