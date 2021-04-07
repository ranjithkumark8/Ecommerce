import React from 'react'
import { Switch } from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"
import { Home } from "../components/Home/Home"
import { MensPage } from "../components/MensPage/MensPage"
import { WomensPage } from "../components/WomensPage/WomensPage"
import { SignIn } from "../components/authentication/SignIn/SignIn"
import { SignUp } from "../components/authentication/SignUp/SignUp"
import { Footer } from '../components/Home/footer/Footer'
export const Router = () => {
    return (
        <div>
            <Switch>
                <PrivateRouter exact path="/">
                    <Home />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Mens">
                    <MensPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Womens">
                    <WomensPage />
                </PrivateRouter>
                <PrivateRouter exact path="/collections/Sale">
                    <MensPage />
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
