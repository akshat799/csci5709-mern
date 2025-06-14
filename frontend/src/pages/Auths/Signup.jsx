import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from '../../assets/logo.png';
import * as Yup from 'yup';

export default function Signup() {

    const SignupSchema = Yup.object().shape({
        fullname: Yup.string()
            .required('Full name is required')
            .min(3, 'Full name must be at least 3 characters'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10,15}$/, 'Phone number must be 10 digits'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
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

            <h3 className='mb-4 text-center'>Sign Up</h3>
            <Formik
                initialValues={{
                    fullname: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form submitted:', values);
                    resetForm();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className='mb-3'>
                            <label className='form-label'>Full Name</label>
                            <Field
                                type='text'
                                name='fullname'
                                className='form-control'
                                placeholder='Enter your full name'
                                />
                            <ErrorMessage name='fullname' component='div' className='text-danger' />
                        </div>
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
                            <label className='form-label'>Phone Number</label>
                            <Field
                                type='text'
                                name='phone'
                                className='form-control'
                                placeholder='Enter your phone number'
                                />
                            <ErrorMessage name='phone' component='div' className='text-danger' />
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
                        <div className='mb-3'>
                            <label className='form-label'>Confirm Password</label>
                            <Field
                                type='password'
                                name='confirmPassword'
                                className='form-control'
                                placeholder='Confirm your password'
                                />
                            <ErrorMessage name='confirmPassword' component='div' className='text-danger' />
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
