import {Dispatch} from "redux";
import {ContactsType, profileAPI, ProfileRequestType} from "../api/api";
import {AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";

export type ProfileReducersActionType =
  | ReturnType<typeof AddPostAC>
  | ReturnType<typeof NewPostText>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof updateStatus>
  | ReturnType<typeof setPhoto>


const ADD_POST = 'PROFILE/ADD-POST';
const NEW_POST_TEXT = 'PROFILE/NEW-POST-TEXT';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';
const UPDATE_USER_STATUS = 'PROFILE/UPDATE_USER_STATUS';
const SET_PHOTO = 'PROFILE/SET-PHOTO';

export type PhotosType = {
  small: string | null
  large: string | null
}

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
  lookingForAJob: boolean,
  fullName: string,
  aboutMe: string,
  contacts: ContactsType
  photos: PhotosType
}

const initialState: ProfilePageType = {
  postData: [
    {name: 'Eduarda', message: 'Hello', likes: '15'},
    {name: 'Artiom', message: 'Good morning', likes: '20'}
  ],
  newTextValue: '',
  profile: null,
  status: '',
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionType): ProfilePageType => {

  switch (action.type) {
    case ADD_POST: {
      const newPost: PostData = {
        name: action.fullName,
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
    case SET_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos } as ProfileType
      }
    }
    default:
      return state;
  }
};

export const AddPostAC = (newTextValue: string, name: string) => {
  debugger
  return {
    type: ADD_POST,
    postMessage: newTextValue,
    fullName: name
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

export const setPhoto = (photos: PhotosType) => {
  return {
    type: SET_PHOTO,
    photos: photos
  } as const
}

export const updateStatus = (status: string) => {
  return {
    type: UPDATE_USER_STATUS,
    status: status
  } as const
}

export const getUserProfile = (userId: number | null) => {
  return async (dispatch: Dispatch) => {

    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
  }
}

export const getUserStatus = (userId: string) => {
  return async (dispatch: Dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))

  }
}

export const updateUserStatus = (status: string) => {
  return async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  }
}

export const saveProfile = (profile: ProfileRequestType): AppThunk => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
      return Promise.reject()
    }
  }
}

export const savePhoto = (file: File) => {
  return async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.data.photos))
    }
  }
}