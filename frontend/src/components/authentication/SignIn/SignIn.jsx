import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignIn.css"
import { useDispatch, useSelector } from 'react-redux';
import { signInDetails } from '../../../Redux/AuthRedux/action';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto;`;

export const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector((state) => state.authReducer.token)
    const isLoading = useSelector((state) => state.authReducer.isLoading)
    // console.log(isLoading)
    const isError = useSelector((state) => state.authReducer.isError)
    if (token) {
        history.push("/")
    }
    const {
        // values,
        handleSubmit,
        // submitCount,
        getFieldProps,
        setValues,
        touched,
        errors,
        // setFieldValue
    } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
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
            dispatch(signInDetails(values))
            setValues({
                email: "",
                password: ""
            });
        }
    });

    return (
        <>
            {isError && <div className="ErrorMessage">* Email or password is incorrect</div>}
            {isLoading ? <ClipLoader color="#B73535" loading={isLoading} css={override} size={150} /> : (
                <div className="formWrapper">
                    <form className="baseForm" onSubmit={handleSubmit} noValidate>
                        {/* Form Header */}
                        <header className="baseFormHeader">
                            <h1 className="baseFormHeading">Customer Login</h1>
                        </header>
                        {/* Form main content */}
                        <div className="formRow col-1">
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
                                <span>Forgot your password?</span>
                            </div>
                            {/* <span className="passwordCue">Minimum length is 8 characters</span> */}
                        </div>
                        <div className="submitBtnContainer">
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                    <div className="register_header">
                        <Link to="/Register">No Account ? Register Here</Link>
                    </div>
                </div>
            )}
        </>
    );
}
