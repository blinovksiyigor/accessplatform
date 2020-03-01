import { withFormik } from 'formik';
import * as Yup from 'yup';
import SignUp from '../../../components/auth/loginForm/SignUp/SignUp';
import { displayMessage } from '../../../utils/Message/DisplayMessage';

export default withFormik({
    mapPropsToValues: () => ({ firstname: '', lastname: '', email: '', password: '' }),

    validationSchema: Yup.object().shape({
        firstname: Yup.string()
            .required('First name is required'),
        lastname: Yup.string()
            .required('Last name is required'),
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }),

    handleSubmit: (values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        displayMessage(`Sign Up Form ${message}`);
        setSubmitting(false);
    },
})(SignUp);