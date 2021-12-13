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
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newm
            }
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage)
            stateCopy.newm = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            stateCopy.newm = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}
export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE});
export const updateMessageTextActiveCreator = (messageText) =>
    ({type: UPDATE_MESSAGE_TEXT, newText : messageText});
export  default messagesReducer;

