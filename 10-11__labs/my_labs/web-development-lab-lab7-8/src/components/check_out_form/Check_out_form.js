import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions';
import './Check_out_form.css';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[а-щА-ЩЬьЮюЯяІіЇїЄєҐґa-zA-Z]+$/, 'The name must contain only Ukrainian or English letters')
            .max(20, 'Maximum 20 characters')
            .required('First name is required'),
        lastName: Yup.string()
            .matches(/^[а-щА-ЩЬьЮюЯяІіЇїЄєҐґa-zA-Z]+$/, 'The name must contain only Ukrainian or English letters')
            .max(30, 'Maximum 30 characters')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[A-Za-z0-9._%+-]+@gmail\.com$/, 'Email must be a Gmail address')
            .required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^\+380\d{9}$/, 'The phone number must be in the format +380XXXXXXXXX')
            .required('Phone number is required'),
        address: Yup.string().required('Address is required'),
    });

    const handleSubmit = (values) => {
        console.log('Form Submitted:', values);
        dispatch(clearCart());
        navigate('/success');
    };

    return (
        <div className="checkout-page">
            <h1>Order Form</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '+380',
                    address: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <Field type="text" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>

                        <button type="submit" className="submit-button">Confirm Order</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckoutForm;
