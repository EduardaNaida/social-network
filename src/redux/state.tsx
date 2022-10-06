export type DialogsPageType = {
    messageData: Array<MessageData>
    dialogsData: Array<DialogsData>
}

export type ProfilePageType = {
    postData: Array<PostData>
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
            {name: 'Artiom', message: 'Good morning', likes: '20'}
        ]
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