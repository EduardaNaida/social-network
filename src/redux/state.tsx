export type DialogsPageType = {
    messageData: Array<MessageData>
    dialogsData: Array<DialogsData>
}

export type ProfilePageType = {
    postData: Array<PostData>
    newTextValue: string
}

export type PostData = {
    name: string
    message: string
    likes: string
}

export type MessageData = {
    id: number
    message: string
}

export type DialogsData = {
    id: number
    name: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {name: 'Eduarda', message: 'Hello', likes: '15'},
            {name: 'Artsiom', message: 'Good morning', likes: '20'}
        ],
        newTextValue: ''
    },
    dialogsPage: {
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
        ]
    },
    sidebar: {}
}

export type AddPostActionType = {
    type: "ADD-POST"
    postMessage: string
}

export type ChangeNewTextType = {
    type: "NEW-POST-TEXT"
    newText: string
}

export type ActionsType = AddPostActionType | ChangeNewTextType


export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void
    getState:  () => RootStateType
    // addPost: (postMessage: string) => void
    subscribe: (observer: () => void) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export let store: StoreType = {
    _callSubscriber() {
        console.log('state changed')
    },
    _state: {
        profilePage: {
            postData: [
                {name: 'Eduarda', message: 'Hello', likes: '15'},
                {name: 'Artsiom', message: 'Good morning', likes: '20'}
            ],
            newTextValue: ''
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

/*    addPost(postMessage: string) {
        const newPost: PostData = {
            name: 'Alex',
            message: postMessage,
            likes: '10',
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newTextValue = '';
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newTextValue = newText;
        this._callSubscriber()
    },*/
    dispatch(action) {
        if(action.type === "ADD-POST" ){
            const newPost: PostData = {
                name: 'Alex',
                message: action.postMessage,
                likes: '10',
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newTextValue = '';
            this._callSubscriber()
        }
        else if (action.type === "NEW-POST-TEXT" ){
            this._state.profilePage.newTextValue = action.newText;
            this._callSubscriber()
        }
    }

}

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