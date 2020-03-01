import React from 'react';
//Utils
import LoginButton from '../../../../utils/Buttons/auth/LoginButton';
import LoginEmail from '../../../../utils/Inputs/auth/LoginFormEmail';
import LoginPassword from '../../../../utils/Inputs/auth/LoginFormPassword';
//Scss
import SignInLayout from './SignIn.module.scss';
import Buttons from '../../../../resources/styles/Modules/Buttons/Buttons.module.scss';
import Inputs from '../../../../resources/styles/Modules/Inputs/Inputs.module.scss';

const SignIn = (props) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;


    return (
        <div className={SignInLayout.signUpContent}>
            <p>Welcome back !!!</p>
            <form onSubmit={handleSubmit} noValidate className={SignInLayout.formInner}>
                <div> <LoginEmail type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    placeholder={`Email *`}
                    className={errors.email && touched.email ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                    {errors.email && touched.email && <div className={SignInLayout.errorMessage}>{errors.email}</div>}</div>

                <div><LoginPassword type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name="password"
                    placeholder={`Password *`}
                    className={errors.password && touched.password ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                    {errors.password && touched.password && <div className={SignInLayout.errorMessage}>{errors.password}</div>} <a href='/' alt='forgot-password'>Forgot Password?</a></div>



                <LoginButton type="submit"
                    ButtonText={'LOG IN'}
                    className={Buttons.loginFormButton}
                    disabled={isSubmitting}
                />
            </form>

        </div>
    );


};

export default SignIn;  