import {Dispatch} from "redux";
import {authMe} from "../api/api";

export type authReducersActionType =
    | ReturnType<typeof setUserData>

const SET_USER_DATA = "SET_USER_DATA";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setUserData = (id: number, email: string, login: string) => ({
        type: SET_USER_DATA,
        data: {id, email, login}
    } as const
)

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    console.log(id, email, login)
                    dispatch(setUserData(id, email, login))
                }
            });
    }
}