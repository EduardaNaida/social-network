import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {Header} from "./Header";

type ParamsType = {
    id: string,
    email: string,
    login: string
}

type MapStatePropsType = {
    login: string | null,
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderPropsType = RouteComponentProps<ParamsType> & MapDispatchPropsType & MapStatePropsType

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
};


const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

let WithURLDataContainer = withRouter(HeaderContainerAPI)

export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData, logout
})(WithURLDataContainer)