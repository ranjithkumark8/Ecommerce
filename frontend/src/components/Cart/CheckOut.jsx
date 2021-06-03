import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOutReset } from '../../Redux/AuthRedux/action'
import { Link } from "react-router-dom"
import "./Cart.css"
import { checkOutOrderGet } from '../../Redux/OrderRedux/action'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto;`;

export const CheckOut = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const previousOrders = useSelector((state) => state.orderReducer.previousOrders.reverse())
    const token = useSelector((state) => state.authReducer.token)
    const isLoading = useSelector((state) => state.orderReducer.isLoading)
    // console.log(previousOrders, isLoading)
    const handleLogout = () => {
        dispatch(logOutReset())
        history.push("/")
    }

    React.useEffect(() => {
        dispatch(checkOutOrderGet(token))
    }, [token, dispatch])

    return (
        <>
            {isLoading ? <ClipLoader color="#B73535" loading={isLoading} css={override} size={150} /> : (
                previousOrders?.length > 0 ?
                    <>
                        {/* <div className="checkout-logOutBtn">
                            <button onClick={handleLogout}>Log Out</button>
                        </div> */}
                        {previousOrders?.map((product, i) => (
                            <div className="container" key={product._id}>
                                <h1>Order - {i + 1}</h1>
                                <div className="checkOut-ordersContainer" >
                                    {product.productId?.map((singleProduct, index) => (
                                        <div className="ordersContainer" key={singleProduct._id}>
                                            <div className="ordersContainerImage">
                                                <img src={singleProduct.image} alt={singleProduct.productName} />
                                            </div>
                                            <div className="ordersContainerInfo orderContainerCheckOut">
                                                <h1>{singleProduct.productName}</h1>
                                                <h1>₹ {singleProduct.returnSale ? singleProduct.discountPrice : singleProduct.price}</h1>
                                                <h1> Quantity - {product.quantity[index]}</h1>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="subTotalInfo">
                                    <h1>Total</h1>
                                    {/* <h1>₹ {previousOrders?.length > 0 ? previousOrders?.reduce((a, b) => {
                                return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
                            }, 0) : 0}</h1> */}
                                    <h1>{product.totalAmount}</h1>
                                </div>
                            </div>
                        ))}
                    </>
                    :
                    (
                        <>
                            <div className="checkout-logOutBtn bottomMargin">
                                <button onClick={handleLogout}>Log Out</button>
                            </div>
                            <div className="emptyCartContainer">
                                <h1>No orders to show</h1>
                                <h3>Continue browsing <Link to="/">Here.</Link></h3>
                            </div>
                        </>
                    )
            )}
        </>

    )
}
