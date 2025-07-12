import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import logo from '../../assets/logo.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    return (
<div className='signup-container'>
        <div className='signup-card shadow p-4'> 
            <div className='text-center mb-4'>
                <img
                    className='logo'
                    src={logo}
                    alt='Logo'
                    style={{ width: '200px'}}
                />
            </div>

            <h3 className='mb-4 text-center'>Log In</h3>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log('Form values:', values);
                    const success = await dispatch(login(values));

                    if (success) {
                        resetForm();
                        navigate('/products');
                    }

                    setSubmitting(false);
                }}
            >
                {({isSubmitting}) => (
                    <Form>                      
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <Field
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Enter your email'
                                />
                            <ErrorMessage name='email' component='div' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <Field
                                type='password'
                                name='password'
                                className='form-control'
                                placeholder='Enter your password'
                                />
                            <ErrorMessage name='password' component='div' className='text-danger' />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary w-100 mt-3'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </Form>    
                )}
            </Formik>
        </div>
    </div>
  )
}

export default Login;