
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

    chatMessage: [
        {id: 1, message: "Hi! how are you?32", like: "likes 12"},
        {id: 2, message: "Its my first post77!", like: "likes 22"},
        // {id: 3, message: "Hi! how are you?6767", like: "likes 12"},
        // {id: 4, message: "Its my first post!&^", like: "likes 22"}
    ],
        newp:''
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 2,
                message: state.newp,
                like: 0
            }
            state.chatMessage.push(newPost);
            state.newp = ('');
            return state;
        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.newp = action.newPostText;
            return state;

        default:
            return state;
    }


}
export const addPostActionCreator = () =>
    ({type:'ADD_POST'});
export const updateNewMessageTextActionCreator = (textMessage) =>
    ({type:'UPDATE_NEW_MESSAGE_TEXT', newPostText:textMessage});
export  default chatReducer;