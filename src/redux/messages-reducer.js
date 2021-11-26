const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {

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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 2,
                message: state.newm
            }
            state.messageData.push(newMessage)
            state.newm = ('');
           return state
        case 'UPDATE_MESSAGE_TEXT':
            state.newm = action.newText;
            return state

        default:
            return state;
    }

}
export  default messagesReducer;
export const addMessageActionCreator = () =>
    ({type:'ADD_MESSAGE'});
export const updateMessageTextActiveCreator = (newText) =>
    ({type:'UPDATE_MESSAGE_TEXT', newText:newText});
