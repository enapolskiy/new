const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const messagesReducer = (state, action) => {
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
