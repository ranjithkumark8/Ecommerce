import React from 'react'
import { Switch } from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"
import { Home } from "../components/Home/Home"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { SignIn } from "../components/authentication/SignIn/SignIn"
import { SignUp } from "../components/authentication/SignUp/SignUp"
import { Footer } from '../components/Home/footer/Footer'
import { SingleProductPage } from '../components/SingleProductPage/SingleProductPage'
export const Router = () => {
    return (
        <div>
            <Switch>
                <PrivateRouter exact path="/">
                    <Home />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Mens">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Womens">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Sale">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/:id">
                    <SingleProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/SignIn">
                    <SignIn />
                    {/* <Footer /> */}
                </PrivateRouter>
                <PrivateRouter exact path="/Register">
                    <SignUp />
                </PrivateRouter>
            </Switch>
        </div>
    )
}
