import React from 'react';
//Utils
import LoginButton from '../../../../utils/Buttons/auth/LoginButton';
import LoginNames from '../../../../utils/Inputs/auth/LoginFormNames';
import LoginEmail from '../../../../utils/Inputs/auth/LoginFormEmail';
import LoginPassword from '../../../../utils/Inputs/auth/LoginFormPassword';
//Scss
import SignUpLayout from './SignUp.module.scss';
import Buttons from '../../../../resources/styles/Modules/Buttons/Buttons.module.scss';
import Inputs from '../../../../resources/styles/Modules/Inputs/Inputs.module.scss';

const SignUp = (props) => {
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
        <div className={SignUpLayout.signUpContent}>
            <p>Sign Up for Free</p>
            <form onSubmit={handleSubmit} noValidate className={SignUpLayout.formInner}>
                <div className={SignUpLayout.namesContainer}>
                    <div><LoginNames type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        name="firstname"
                        placeholder={`First Name *`}
                        className={errors.firstname && touched.firstname ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                        {errors.firstname && touched.firstname && <div className={SignUpLayout.errorMessage}>{errors.firstname}</div>}</div>

                    <div><LoginNames type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        name="lastname"
                        placeholder={`Last Name *`}
                        className={errors.lastname && touched.lastname ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                        {errors.lastname && touched.lastname && <div className={SignUpLayout.errorMessage}>{errors.lastname}</div>}</div>

                </div>

                <div> <LoginEmail type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    placeholder={`Email *`}
                    className={errors.email && touched.email ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                    {errors.email && touched.email && <div className={SignUpLayout.errorMessage}>{errors.email}</div>}</div>

                <div><LoginPassword type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name="password"
                    placeholder={`Password *`}
                    className={errors.password && touched.password ? Inputs.inputsLoginFormError : Inputs.inputsLoginForm} />
                    {errors.password && touched.password && <div className={SignUpLayout.errorMessage}>{errors.password}</div>}</div>


                <LoginButton type="submit"
                    ButtonText={'GET STARTED'}
                    className={Buttons.loginFormButton}
                    disabled={isSubmitting}
                />
            </form>

        </div>
    );


};

export default SignUp;  