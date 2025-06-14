import React from 'react'
import { Form } from 'react-bootstrap';
import ModalComponent from '../../components/ModalComponent';
import * as Yup from 'yup';
import { Formik } from 'formik';

export default function ProductModal({initialValues, onSubmit, onClose, show, isEdit}) {

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Product name is required")
            .min(3, "Product name must be at least 3 characters"),
        image: Yup.string()
            .required("Image URL is required")
            .url("Invalid URL format"),
        description: Yup.string()
            .required("Description is required")
            .min(10, "Description must be at least 10 characters"),
        price: Yup.number()
            .required("Price is required")
            .positive("Price must be a positive number")
            .typeError("Price must be a number"),
    });

  return (
    <>
        <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
            onSubmit(values);
            resetForm();
            onClose();
        }}
        > 
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                <ModalComponent
                show={show}
                onClose={onClose}
                onSubmit={handleSubmit}
                title={isEdit ? "Edit Product" : "Add Product"}
                submitLabel={isEdit ? "Update" : "Add"}
                >
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter product name'
                                value={values.title}
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.title && !errors.title}
                                isInvalid={touched.title && !!errors.title}
                                autoFocus
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Banner</Form.Label>
                            <Form.Control
                                type='text'
                                name="image"
                                placeholder='Enter banner URL'
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.image && !errors.image}
                                isInvalid={touched.image && !!errors.image}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='textarea'
                                name="description"
                                placeholder='Enter description'
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.image && !errors.image}
                                isInvalid={touched.image && !!errors.image}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='text'
                                name="price"
                                placeholder='Enter price'
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.image && !errors.image}
                                isInvalid={touched.image && !!errors.image}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>    
                </ModalComponent>    
            )}
            
        </Formik>
        
    </>
  )
}
