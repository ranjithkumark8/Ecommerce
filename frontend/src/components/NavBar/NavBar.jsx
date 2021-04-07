import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="navBarContainer">
            <div>
                <Link to="/">
                    <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/29/assets/logo.svg?v=15296944597036347616" alt="HomePage Logo" />
                </Link>
            </div>
            <div className="products">
                <ul>
                    <li>
                        <Link to="/collections/Mens" className="whiteText">SHOP MEN'S</Link>
                    </li>
                    <li>
                        <Link to="/collections/Womens" className="whiteText">SHOP WOMEN'S</Link>
                    </li>
                    <li>
                        <Link to="/collections/Sale" className="whiteText">RETURN SALE</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
