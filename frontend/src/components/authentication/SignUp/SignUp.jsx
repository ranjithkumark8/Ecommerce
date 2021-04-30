import React from 'react'
import { useHistory } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { postSignUpDetails } from '../../../Redux/AuthRedux/action';

export const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector((state) => state.authReducer.token)
    // console.log(token)
    if (token) {
        history.push("/")
    }
    const {
        values,
        handleSubmit,
        submitCount,
        getFieldProps,
        setValues,
        touched,
        errors,
        setFieldValue
    } = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            first_name: Yup.string().required("* Required"),
            last_name: Yup.string().required("* Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("* Required"),
            password: Yup.string()
                .min(8, "Must be more than 8 characters")
                .required("* Required")
        }),
        onSubmit(values) {
            // We added a `username` value for the user which is everything before @ in their email address.
            // alert(JSON.stringify(values))
            // console.log(values)
            dispatch(postSignUpDetails(values))
            setValues({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            });
        }
    });

    return (
        <>
            <div className="formWrapper">
                <form className="baseForm" onSubmit={handleSubmit} noValidate>
                    {/* Form Header */}
                    <header className="baseFormHeader">
                        <h1 className="baseFormHeading">Create Account</h1>
                    </header>
                    {/* Form main content */}
                    <div className="formRow col-1">
                        <div className="formFieldWrap">
                            <label className="formFieldLabel" htmlFor="first_name">
                                First Name
                            </label>

                            <div className="formFieldWrapInner">
                                <input
                                    type="text"
                                    id="first_name"
                                    className="formField"
                                    {...getFieldProps("first_name")}
                                />

                                <span className="errorMessage">
                                    {touched["first_name"] && errors["first_name"]}
                                </span>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label className="formFieldLabel" htmlFor="last_name">
                                Last Name
                            </label>

                            <div className="formFieldWrapInner">
                                <input
                                    type="text"
                                    id="last_name"
                                    className="formField"
                                    {...getFieldProps("last_name")}
                                />

                                <span className="errorMessage">
                                    {touched["last_name"] && errors["last_name"]}
                                </span>
                            </div>
                        </div>
                        <div className="formFieldWrap">
                            <label className="formFieldLabel" htmlFor="email">
                                Email address
                            </label>

                            <div className="formFieldWrapInner">
                                <input
                                    type="email"
                                    id="email"
                                    className="email formField"
                                    {...getFieldProps("email")}
                                />

                                <span className="errorMessage">
                                    {touched["email"] && errors["email"]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="formFieldWrap">
                        <label className="formFieldLabel" htmlFor="password">
                            Password
                        </label>

                        <div className="formFieldWrapInner">
                            <input
                                type="password"
                                id="password"
                                className="password formField"
                                {...getFieldProps("password")}
                            />
                            <span className="errorMessage">
                                {touched["password"] && errors["password"]}
                            </span>
                        </div>
                        {/* <span className="passwordCue">Minimum length is 8 characters</span> */}
                    </div>
                    <div className="submitBtnContainer">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}
