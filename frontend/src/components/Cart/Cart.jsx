import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder } from '../../Redux/OrderRedux/action'
import "./Cart.css"
export const Cart = () => {
    const ordersData = useSelector((state) => state.orderReducer.ordersData)
    const token = useSelector((state) => state.authReducer.token)
    //console.log(ordersData, "orders data")
    // console.log(token, "token cart")
    const dispatch = useDispatch()
    const handleRemoveOrder = (id) => {
        // console.log(id)
        dispatch(deleteOrder(token, id))
    }
    return (
        ordersData.length > 0 ? (
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
                        </div>
                        <button className="ordersRemoveBtn" onClick={() => handleRemoveOrder(product._id)}>Remove</button>
                    </div>
                ))}
                <div className="subTotalInfo">
                    <h1>Sub Total</h1>
                    <h1>₹ {ordersData.length > 0 ? ordersData.reduce((a, b) => {
                        return b.productId.returnSale ? a + b.productId.discountPrice : a + b.productId.price
                    }, 0) : 0}</h1>
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
