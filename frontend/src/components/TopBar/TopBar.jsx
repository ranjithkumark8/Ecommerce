import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Logout } from '../../Redux/AuthRedux/action'
import "./TopBar.css"

export const TopBar = () => {
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
    // console.log(isLoggedIn)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(Logout())
    }
    return (
        <div className="TopBarContainer">
            {/* <div className="mobileShow">
                <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/menu-red.svg?v=240234526471030228" alt="hamburgLogo" />
            </div> */}
            <div className="Register">
                {isLoggedIn ? <div className="textColor" onClick={handleLogout}>LOG OUT</div> : <Link to="/SignIn" className="textColor"><div>MY ACCOUNT</div></Link>}
            </div>
            {/* <div className="mobileHide">
                <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/hiut.svg?v=17943983736889083825" alt="mobileView Logo" />
            </div> */}
            <div className="Cart">
                <Link to="Cart" className="textColor cart_Container">
                    <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/29/assets/shopping-bag.svg?v=16426669069943505311" alt="BagLogo" />
                    <span>0 ITEMS </span>
                    |
                    <span> ₹ 0.00</span>
                </Link>
            </div>
        </div>
    )
}
