import {AppDispatchType} from "./redux-store";
import {getAuthUserData} from "./authReducer";

export type authReducersActionType =
    | ReturnType<typeof setInitialized>

const SET_INITIALIZED = "SET_INITIALIZED";

export type AppDataType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}


export const appReducer = (state: AppDataType = initialState, action: authReducersActionType): AppDataType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
};

export const setInitialized = () => {
    return {type: SET_INITIALIZED} as const
}

export const initializeApp = () => (dispatch: AppDispatchType) => {
    const promise = dispatch(getAuthUserData())

    promise.then(() => {
        dispatch(setInitialized())
    })
}