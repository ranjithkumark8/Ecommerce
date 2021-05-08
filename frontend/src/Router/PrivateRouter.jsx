import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from "react-router-dom"

export const PrivateRouter = ({ children, path, exact = true, redirectPath = "/SignIn" }) => {
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
    // console.log(isLoggedIn)
    return isLoggedIn ? (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    ) : (
        <Redirect to={redirectPath} />
    );
}
