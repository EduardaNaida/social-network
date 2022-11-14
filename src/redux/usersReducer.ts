import React from 'react';

export type UsersReducersActionType =
    | ReturnType<typeof Follow>
    | ReturnType<typeof Unfollow>
    | ReturnType<typeof SetUsers>


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UsersData = {
    id: number,
    name: string
    followed: boolean
    avatar: string
}

export type UserPropsType = {
    users: UsersData[]
}

const initialState: UserPropsType = {
    users: [
        // {
        //     id: 1,
        //     name: 'Eduarda',
        //     followed: false,
        //     avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        // },
        // {
        //     id: 2,
        //     name: 'Artiom',
        //     followed: true,
        //     avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        // },
        // {
        //     id: 3,
        //     name: 'Dasha',
        //     followed: false,
        //     avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        // },
        // {
        //     id: 4,
        //     name: 'Ivan',
        //     followed: true,
        //     avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        // },
        // {
        //     id: 5,
        //     name: 'Ekaterina',
        //     followed: true,
        //     avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        // },
    ]
}

export const usersReducer = (state: UserPropsType = initialState, action: UsersReducersActionType): UserPropsType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const Follow = (userID: number) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}

export const Unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}

export const SetUsers = (users: Array<UsersData>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
