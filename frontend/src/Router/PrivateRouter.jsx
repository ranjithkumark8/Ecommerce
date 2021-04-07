import React from 'react'
import { Route } from "react-router-dom"

export const PrivateRouter = ({ children, path, exact, redirectPath }) => {
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}
