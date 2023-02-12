import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer, ProfileReducersActionType} from "./profileReducer";
import {dialogsReducer, dialogsReducersActionType} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer, UsersReducersActionType} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {useDispatch} from "react-redux";
import {appReducer, authReducersActionType} from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof reducers>;

export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>

export const AppDispatch = () => useDispatch<AppDispatchType>()

export type DispatchType = ReturnType<typeof AppDispatch>
export type AppActionsType = ProfileReducersActionType
  | authReducersActionType
  | dialogsReducersActionType
  | UsersReducersActionType

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AppActionsType
  >

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))