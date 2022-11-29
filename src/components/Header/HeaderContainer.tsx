import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserData, UserDataType} from "../../redux/authReducer";
import {Header} from "./Header";
import axios from "axios";

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
    setUserData: (id: number, email: string, login: string) => void
}

export type HeaderPropsType = RouteComponentProps<ParamsType> & MapDispatchPropsType & MapStatePropsType

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                    console.log(id, email, login)
                }
            });
    }

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
    setUserData
})(WithURLDataContainer)