import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CheckBox, InputArea} from "../common/formControls/formControl";
import {requiredField} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import styleError from '../common/formControls/FormControls.module.css'
import style from './Login.module.css'
import {Button} from "@mui/material";


type FormDataType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}

type LoginCaptchaType = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginCaptchaType> & LoginCaptchaType> = ({
                                                                                                     error,
                                                                                                     handleSubmit,
                                                                                                     captchaUrl
                                                                                                   }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.loginForm}>
        <div>
          <Field placeholder={'Email'}
                 name={'email'}
                 component={InputArea}
                 validate={[requiredField]}/>
        </div>
        <div>
          <Field placeholder={'Password'}
                 type={'password'}
                 name={'password'}
                 component={InputArea}
                 validate={[requiredField]}/>
        </div>
        <div className={style.checkBox}>
          <Field component={CheckBox}
                 type={'checkbox'}
                 name={'rememberMe'}
                 validate={[requiredField]}/>remember me
        </div>
        <div>
          {error && <div className={styleError.formControlError}>{error}</div>}
        </div>
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && <Field placeholder={'Type symbols'}
                              name={'captcha'}
                              component={InputArea}
                              validate={[requiredField]}/>}

        <div className={style.button}>
          <Button sx={styleButton} type={'submit'}>Login</Button>
        </div>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType, LoginCaptchaType>({form: 'email'})(LoginForm)

const Login = (props: LoginPropsType) => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div className={style.loginBlock}>
      <h2>Login page</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
  );
};

type LoginPropsType = mapDispatchToProps & mapStateToPropsType

type mapDispatchToProps = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type mapStateToPropsType = {
  isAuth: boolean
  captchaUrl: string | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const styleButton = {
  display: 'flex',
  bgcolor: 'rgba(79,123,250,0.96)',
  color: 'white',
  borderRadius: 30,
  width: 111,
  height: 36,
  fontSize: 15,
  fontFamily: `'Montserrat', sans-serif`,
  textTransform: 'none',
  '&:hover': {
    color: '#366EFF',
  },
}

export default connect(mapStateToProps, {login})(Login);


