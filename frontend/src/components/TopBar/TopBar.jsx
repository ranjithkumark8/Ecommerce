import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { getUserDetails, logOutReset } from '../../Redux/AuthRedux/action'
import { getUserOrders } from '../../Redux/OrderRedux/action'
import "./TopBar.css"

export const TopBar = () => {
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
    const token = useSelector((state) => state.authReducer.token)
    let ordersData = useSelector((state) => state.orderReducer.ordersData)
    let userDetails = useSelector((state) => state.authReducer.userDetails)
    // console.log(userDetails)
    // console.log(ordersData, "hi")
    const history = useHistory()
    const dispatch = useDispatch()
    const handleCheckOut = () => {
        // dispatch(Logout())
        // dispatch(logOutReset())
        history.push("/checkout")
    }
    React.useEffect(() => {
        // console.log(token)
        if (token) {
            dispatch(getUserOrders(token))
            dispatch(getUserDetails(token))
        }
    }, [token, dispatch])

    const handleLogout = () => {
        dispatch(logOutReset())
        history.push("/")
    }

    return (
        <div className="TopBarContainer">
            {/* <div className="mobileShow">
                <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/menu-red.svg?v=240234526471030228" alt="hamburgLogo" />
            </div> */}
            <div className="Register">
                {isLoggedIn ? <div className="textUser">
                    <div className="RegisterUser">
                        <span className="RegisterUserPointer" onClick={handleCheckOut}>{userDetails.first_name}</span>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
                    :
                    <Link to="/SignIn" className="textColor"><div>MY ACCOUNT</div></Link>}
            </div>
            {/* <div className="mobileHide">
                <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/26/assets/hiut.svg?v=17943983736889083825" alt="mobileView Logo" />
            </div> */}
            <div className="Cart">
                <Link to="/cart" className="textColor cart_Container">
                    <img src="https://cdn.shopify.com/s/files/1/0065/4242/t/29/assets/shopping-bag.svg?v=16426669069943505311" alt="BagLogo" />
                    <span>{ordersData?.length > 0 ? ordersData?.reduce((a, b) => { return a + b.quantity }, 0) : 0} ITEMS </span>
                    |
                    <span> ₹ {ordersData?.length > 0 ? ordersData?.reduce((a, b) => {
                        return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
                    }, 0) : 0}</span>
                </Link>
            </div>
        </div>
    )
}
