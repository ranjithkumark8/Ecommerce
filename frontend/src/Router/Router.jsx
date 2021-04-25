import React from 'react'
import { Route, Switch } from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"
import { Home } from "../components/Home/Home"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { SignIn } from "../components/authentication/SignIn/SignIn"
import { SignUp } from "../components/authentication/SignUp/SignUp"
import { Footer } from '../components/Home/footer/Footer'
import { SingleProductPage } from '../components/SingleProductPage/SingleProductPage'
import { Cart } from '../components/Cart/Cart'
export const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRouter exact path="/collections/Mens" redirectPath="/SignIn">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Womens" redirectPath="/SignIn">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Sale" redirectPath="/SignIn">
                    <ProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/:id" redirectPath="/SignIn">
                    <SingleProductPage />
                </PrivateRouter>
                <PrivateRouter exact path="/cart" redirectPath="/SignIn">
                    <Cart />
                </PrivateRouter>
                <Route exact path="/SignIn">
                    <SignIn />
                    {/* <Footer /> */}
                </Route>
                <Route exact path="/Register" >
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}
