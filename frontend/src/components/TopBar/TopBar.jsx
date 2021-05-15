import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { logOutReset } from '../../Redux/AuthRedux/action'
import { getUserOrders } from '../../Redux/OrderRedux/action'
import "./TopBar.css"

export const TopBar = () => {
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
    const token = useSelector((state) => state.authReducer.token)
    let ordersData = useSelector((state) => state.orderReducer.ordersData)
    // console.log(ordersData, "hi")
    const dispatch = useDispatch()
    const handleLogout = () => {
        // dispatch(Logout())
        dispatch(logOutReset())
    }
    React.useEffect(() => {
        // console.log(token)
        if (token) {
            dispatch(getUserOrders(token))
        }
    }, [token])

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
                <Link to="/cart" className="textColor cart_Container">
                    <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/29/assets/shopping-bag.svg?v=16426669069943505311" alt="BagLogo" />
                    <span>{ordersData.length > 0 ? ordersData.reduce((a, b) => { return a + b.quantity }, 0) : 0} ITEMS </span>
                    |
                    <span> ₹ {ordersData.length > 0 ? ordersData.reduce((a, b) => {
                        return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
                    }, 0) : 0}</span>
                </Link>
            </div>
        </div>
    )
}
