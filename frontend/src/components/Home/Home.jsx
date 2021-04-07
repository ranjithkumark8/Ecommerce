import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import { Footer } from "./footer/Footer"
export const Home = () => {
    return (
        <div className="HomeContainer">
            <div className="SaleImg">
                <div className="SaleText">
                    <h2>
                        Return Sale.
                        <br />
                        Just Launched.
                    </h2>
                </div>
            </div>
            <div className="shoppingCategory">
                <div className="categoryContainer">
                    <div className="categoryParts">
                        <h3>Men's Jeans</h3>
                        <p>Five fits: Wide. Regular. Slim. Slim Tapered. Skinny. Two raw denims: Organic. Selvedge. And one Tech Fabric for the more active. We make the best jeans we can, not the most jeans we can.</p>
                        <Link to="/collections/Mens" className="categoryPartsLink">Shop Men's Jeans</Link>
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/mhome.jpg?v=17509700649080606408" alt="MensShop" />
                    </div>
                </div>
                <div className="categoryContainer">
                    <div className="categoryParts">
                        <h3>Women's Jeans</h3>
                        <p>Four Fits: Skinny. High Waist. Girlfriend. Slim. Three denims: Two stretch denims, rinsed. One raw denim. We make the best jeans we can, not the most jeans we can.</p>
                        <Link to="/collections/Womens" className="categoryPartsLink">Shop Women's Jeans</Link>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/codahome3.jpg?v=915394145690597757" alt="WomensShop" />
                </div>
            </div >
            <div className="videoWrapper" >
                <iframe src="https://www.youtube.com/embed/CD-C8V8NNlo" title="denimVideo" width="550" height="315" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="footer_topSpace"></div>
            <Footer />
        </div >
    )
}
