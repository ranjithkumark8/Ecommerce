import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { checkoutOrder, deleteManyOrder, deleteOrder, getUserOrders } from '../../Redux/OrderRedux/action'
import "./Cart.css"
import StripeCheckout from 'react-stripe-checkout';

export const Cart = () => {
    const ordersData = useSelector((state) => state.orderReducer.ordersData)

    const token = useSelector((state) => state.authReducer.token)
    // console.log(ordersData, "orders data")
    // console.log(token, "token cart")
    const dispatch = useDispatch()
    const handleRemoveOrder = (id) => {
        // console.log(id)
        dispatch(deleteOrder(token, id))
    }
    const handlePayment = () => {
        let productId = ordersData?.map((product) => product.productId._id)
        let quantity = ordersData?.map((qty) => qty.quantity)
        let totalAmount = ordersData?.reduce((a, b) => {
            return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
        }, 0)
        let body = {
            productId,
            quantity,
            totalAmount
        }
        let body2 = ordersData?.map((order) => order._id)
        // console.log(body, body2)
        dispatch(checkoutOrder(token, body))
        dispatch(deleteManyOrder(token, body2))
    }

    React.useEffect(() => {
        dispatch(getUserOrders(token))
    }, [token, dispatch])
    return (
        ordersData?.length > 0 ? (
            <div className="container">
                <h1>Your Bag</h1>
                {ordersData?.map((product) => (
                    <div className="ordersContainer" key={product._id}>
                        <div className="ordersContainerImage">
                            <img src={product.productId.image} alt={product.productId.productName} />
                        </div>
                        <div className="ordersContainerInfo">
                            <h1>{product.productId.productName}</h1>
                            <h1>₹ {product.productId.returnSale ? product.productId.discountPrice : product.productId.price}</h1>
                            <h1> Quantity - {product.quantity}</h1>
                        </div>
                        <div>
                            <button className="ordersRemoveBtn" onClick={() => handleRemoveOrder(product._id)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="subTotalInfo">
                    <h1>Sub Total</h1>
                    <h1>₹ {ordersData?.length > 0 ? ordersData?.reduce((a, b) => {
                        return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
                    }, 0) : 0}</h1>
                </div>
                <div className="checkOut">
                    <StripeCheckout
                        stripeKey="pk_test_51Ix2iKSC9oLyzR3oeSicVBIhmDR0CRzJcZ46Fgn4g4iCwuP8cUSw6eRvZrLp8VubOeDadQh1UWw6iM2wclM50i6500XNyKQdMN"
                        token={handlePayment}
                        amount={
                            (ordersData?.length > 0 ? ordersData?.reduce((a, b) => {
                                return b.productId.returnSale ? a + b.productId.discountPrice * b.quantity : a + b.productId.price * b.quantity
                            }, 0) : 0)
                            * 100}
                        currency="INR"
                    >
                        <button>Check Out</button>
                    </StripeCheckout>
                </div>
            </div>) :
            (
                <div className="emptyCartContainer">
                    <h1>Your cart is currently empty</h1>
                    <h3>Continue browsing <Link to="/">Here.</Link></h3>
                </div>
            )

    )
}
