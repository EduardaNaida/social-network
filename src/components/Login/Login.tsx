import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/formControl";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: string
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
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
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h3>Login page</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;