import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/formControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from '../common/formControls/FormControls.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean
    error: string
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={'password'}
                       name={'password'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input}
                       type={'checkbox'}
                       name={'rememberMe'}
                       validate={[requiredField]}/>remember me
            </div>
            {props.error && <div className={style.formControlError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

{/*{props.error &&*/
}
{/*    <div className={style.formControlError}>{props.error}</div>*/
}
{/*}*/
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'email'})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h3>Login page</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type LoginPropsType = mapDispatchToProps & mapStateToPropsType

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login);


