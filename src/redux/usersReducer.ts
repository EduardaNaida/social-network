import React from 'react';

export type UsersReducersActionType =
    | ReturnType<typeof Follow>
    | ReturnType<typeof Unfollow>
    | ReturnType<typeof SetUsers>
    | ReturnType<typeof SetCurrentPage>
    | ReturnType<typeof SetTotalCount>
    | ReturnType<typeof SetIsFetching>


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export type UsersData = {
    id: number,
    name: string
    followed: boolean
    avatar: string
}

export type UserPropsType = {
    users: Array<UsersData>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

const initialState: UserPropsType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                users: [...action.users, ...state.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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

export const SetCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}

export const SetTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        count: totalUsersCount
    } as const
}

export const SetIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}