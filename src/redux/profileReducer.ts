import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfileReducersActionType =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof NewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof updateStatus>


const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

export type PostData = {
    name: string
    message: string
    likes: string
}
export type ProfilePageType = {
    postData: Array<PostData>
    newTextValue: string
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    lookingForAJobDescription: string,
    photos: {
        small: string | undefined,
        large: string | undefined
    }
}

const initialState: ProfilePageType = {
    postData: [
        {name: 'Eduarda', message: 'Hello', likes: '15'},
        {name: 'Artiom', message: 'Good morning', likes: '20'}
    ],
    newTextValue: '',
    profile: null,
    status: ''
}

// export type InitialStateType = typeof initialState

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostData = {
                name: 'Alex',
                message: action.postMessage,
                likes: '10',
            }

            return {
                ...state,
                newTextValue: '',
                postData: [...state.postData, newPost]
            };
        }
        case NEW_POST_TEXT: {
            return {
                ...state,
                newTextValue: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const AddPostAC = (newTextValue: string) => {
    return {
        type: ADD_POST,
        postMessage: newTextValue
    } as const
}

export const NewPostText = (newText: string) => {
    return {
        type: NEW_POST_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status: status
    } as const
}

export const updateStatus = (status: string) => {
    return {
        type: UPDATE_USER_STATUS,
        status: status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}