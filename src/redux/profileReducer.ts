
export type ProfileReducersActionType =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof NewPostText>
    | ReturnType<typeof setUserProfile>


const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostData = {
    name: string
    message: string
    likes: string
}
export type ProfilePageType = {
    postData: Array<PostData>
    newTextValue: string
    profile: ProfileType | null
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
    profile: null
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

