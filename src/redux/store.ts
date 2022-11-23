import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
type DialogsPageType = {
    messageData: Array<MessageData>
    dialogsData: Array<DialogsData>
    newMessage: string
}

export type ProfilePageType = {
    postData: Array<PostData>
    newTextValue: string
}

type PostData = {
    name: string
    message: string
    likes: string
}
type MessageData = {
    id: number
    message: string
}

type DialogsData = {
    id: number
    name: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


// export let state: RootStateType = {
//     profilePage: {
//         postData: [
//             {name: 'Eduarda', message: 'Hello', likes: '15'},
//             {name: 'Artsiom', message: 'Good morning', likes: '20'}
//         ],
//         newTextValue: ''
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Eduarda'},
//             {id: 2, name: 'Artiom'},
//             {id: 3, name: 'Dasha'},
//             {id: 4, name: 'Ivan'},
//             {id: 5, name: 'Ekaterina'},
//         ],
//         messageData: [
//             {id: 1, message: 'Hi!'},
//             {id: 2, message: 'How is your day?'},
//             {id: 3, message: 'It\'s good, thanks!'},
//         ]
//     },
//     sidebar: {}
// }

export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    postMessage: string
}
export type NewMessageActionType = {
    type: 'NEW-MESSAGE'
    newText: string
}

export type ChangeNewTextType = {
    type: "NEW-POST-TEXT"
    newText: string
}

export type ActionsType = AddPostActionType
    | ChangeNewTextType
    | AddMessageActionType
    | NewMessageActionType


export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void
    getState: () => RootStateType
    // addPost: (postMessage: string) => void
    subscribe: (observer: () => void) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

// export let store: StoreType = {
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     _state: {
//         profilePage: {
//             postData: [
//                 {name: 'Eduarda', message: 'Hello', likes: '15'},
//                 {name: 'Artsiom', message: 'Good morning', likes: '20'}
//             ],
//             newTextValue: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Eduarda'},
//                 {id: 2, name: 'Artiom'},
//                 {id: 3, name: 'Dasha'},
//                 {id: 4, name: 'Ivan'},
//                 {id: 5, name: 'Ekaterina'},
//             ],
//             messageData: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'How is your day?'},
//                 {id: 3, message: 'It\'s good, thanks!'},
//             ],
//             newMessage: ''
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer;
//     },
//
//     /*    addPost(postMessage: string) {
//             const newPost: PostData = {
//                 name: 'Alex',
//                 message: postMessage,
//                 likes: '10',
//             }
//             this._state.profilePage.postData.push(newPost)
//             this._state.profilePage.newTextValue = '';
//             this._callSubscriber()
//         },
//         updateNewPostText(newText: string) {
//             this._state.profilePage.newTextValue = newText;
//             this._callSubscriber()
//         },*/
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//         /*
//          if (action.type === ADD_POST) {
//                     const newPost: PostData = {
//                         name: 'Alex',
//                         message: action.postMessage,
//                         likes: '10',
//                     }
//                     this._state.profilePage.postData.push(newPost)
//                     this._state.profilePage.newTextValue = '';
//                     this._callSubscriber()
//                 } else if (action.type === NEW_POST_TEXT) {
//                     this._state.profilePage.newTextValue = action.newText;
//                     this._callSubscriber()
//                 } else if (action.type === ADD_MESSAGE) {
//                     const newMessage: MessageData = {
//                         message: action.postMessage,
//                         id: 10
//                     }
//                     this._state.dialogsPage.messageData.push(newMessage)
//                     this._state.dialogsPage.newMessage = '';
//                     this._callSubscriber()
//                 } else if (action.type === NEW_MESSAGE){
//                     this._state.dialogsPage.newMessage = action.newText;*/
//
//     }
//
// }

// export const addPost = (postMessage: string) => {
//     const newPost: PostData = {
//         name: 'Alex',
//         message: postMessage,
//         likes: '10',
//     }
//     state.profilePage.postData.push(newPost)
//     state.profilePage.newTextValue = '';
//     //renderTree();
//     store.renderTree()
// }
/*
export const updateNewPostText = (newText: string) => {
    state.profilePage.newTextValue = newText;
    store.renderTree()
}*/

// export const subscribe = (observer: () => void) => {
//     renderTree = observer;
// }