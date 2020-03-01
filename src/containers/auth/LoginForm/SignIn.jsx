import { withFormik } from 'formik';
import * as Yup from 'yup';
import SignIn from '../../../components/auth/loginForm/SignIn/SignIn';
import { displayMessage } from '../../../utils/Message/DisplayMessage';

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }),

    handleSubmit: (values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        displayMessage(`Login Form ${message}`);
        setSubmitting(false);
    },
})(SignIn);