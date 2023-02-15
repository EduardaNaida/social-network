import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {DispatchType} from "./reduxStore";
import {stopSubmit} from "redux-form";

export type authReducersActionType =
  | ReturnType<typeof setUserData>
  | ReturnType<typeof getCaptchaUrl>

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const GET_CAPTCHA_URL = 'AUTH/GET_CAPTCHA_URL'

export type UserDataType = {
  id: number | null,
  email: string | null,
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}


export const authReducer = (state: UserDataType = initialState, action: authReducersActionType): UserDataType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl
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

export const getCaptchaUrl = (captchaUrl: string) => {
  return {
    type: GET_CAPTCHA_URL,
    captchaUrl: captchaUrl
  } as const
}

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

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {

  return async (dispatch: DispatchType) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
      }
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

export const getCaptcha = () => {
  return async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrl(captchaUrl))
    dispatch(stopSubmit('login', {_error: response.data.messages}))
  }
}