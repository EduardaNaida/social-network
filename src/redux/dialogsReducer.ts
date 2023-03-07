export type dialogsReducersActionType =
    | ReturnType<typeof AddMessage>
    | ReturnType<typeof NewMessage>

const ADD_MESSAGE = "DIALOGS/ADD-MESSAGE";
const NEW_MESSAGE = "DIALOGS/NEW-MESSAGE";

export type MessageData = {
    id: number
    message: string
}

export type DialogsData = {
    id: number
    name: string
}

export type DialogsPageType = {
    messageData: Array<MessageData>
    dialogsData: Array<DialogsData>
    newMessage: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Eduarda'},
        {id: 2, name: 'Artiom'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Ekaterina'},
    ],
    messageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It\'s good, thanks!'},
    ],
    newMessage: ''
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducersActionType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageData = {
                message: action.postMessage,
                id: 10
            }

            return {
                ...state,
                newMessage: '',
                messageData: [...state.messageData, newMessage]
            }
        case NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newText
            }

        default:
            return state;
    }
};

export const AddMessage = (postMessage: string) => ({
        type: ADD_MESSAGE,
        postMessage: postMessage
    } as const
)

export const NewMessage = (newText: string) => ({
        type: NEW_MESSAGE,
        newText: newText
    } as const
)
