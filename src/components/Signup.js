import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';

const Signup  = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15,'Must br 15 characters or less')
        .min(4,'Must enter min 4 characters')
        .required("First name is Required"),
        lastName: Yup.string()
        .max(15,'Must br 15 characters or less')
        .min(4,'Must enter min 4 characters')
        .required("Last name is Required"),
        email: Yup.string()
        .email("Email is invalid")
        .required("Email is Required"),
        password: Yup.string()
        .min(6,'Password must be at least 6 characters')
        .required("Password is Required"),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must match')
        .required('Confirm password is requered')
    })
    const [data, setDate] = React.useState({});
        console.log(data)
    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email:'',
                password:'',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values=>{
                console.log(values)
                setDate(values)
            }}
        >
        {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-display-4">Signup</h1>
                <Form>
                    <TextField  label="Frist Name" name={'firstName'}  type={'text'} />
                    <TextField  label="Last Name" name={'lastName'}  type={'text'} />
                    <TextField  label="Email" name={'email'}  type={'email'} />
                    <TextField  label="Password" name={'password'}  type={'password'} />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>
                </Form>
            </div>
        )}
        </Formik>
    )

}
export default Signup;