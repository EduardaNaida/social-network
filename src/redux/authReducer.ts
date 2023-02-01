import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {DispatchType} from "./reduxStore";
import {stopSubmit} from "redux-form";

export type authReducersActionType =
  | ReturnType<typeof setUserData>

const SET_USER_DATA = "AUTH/SET_USER_DATA";

export type UserDataType = {
  id: number | null,
  email: string | null,
  login: string | null
  isAuth: boolean
}

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


export const authReducer = (state: UserDataType = initialState, action: authReducersActionType): UserDataType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
  } as const
)


export const getAuthUserData = () => {
  return async (dispatch: Dispatch) => {
    let response = await authAPI.authMe()

    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setUserData(id, email, login, true))
    }
    ;
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean) => {

  return async (dispatch: DispatchType) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (response.data.messages.length > 0) {
        dispatch(stopSubmit('email', {_error: response.data.messages}));
      }
    }

  }
}

export const logout = () => {
  return async (dispatch: Dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
    }
  }
}