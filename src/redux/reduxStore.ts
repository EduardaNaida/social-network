import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {useDispatch} from "react-redux";
import {appReducer} from "./appReducer";

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

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))