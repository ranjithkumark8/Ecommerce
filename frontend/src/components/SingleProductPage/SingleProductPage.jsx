import React from 'react'
// import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productData } from '../../Redux/ProductRedux/action'
import "./SingleProductPage.css"
import { postOrders } from '../../Redux/OrderRedux/action'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 50px auto;`;

export const SingleProductPage = () => {
    // const [productsData, setProductData] = React.useState({})
    const { id } = useParams()
    const dispatch = useDispatch()
    let data = useSelector((state) => state.productReducer.productData)
    let isLoading = useSelector((state) => state.productReducer.isLoading)
    React.useEffect(() => {
        dispatch(productData(id))
    }, [id, dispatch])

    const [qty, setQty] = React.useState(1)
    const handleQty = (e) => {
        setQty(e.target.value)
    }
    let orderedProductId = useSelector((state) => state.orderReducer.orderedProductId)
    // console.log(orderedProductId.indexOf(id), orderedProductId)

    const token = useSelector((state) => state.authReducer.token)
    // console.log(token)
    const handleClick = (parameter) => {
        if (parameter === "minus") {
            if (qty !== 1) {
                let x = qty
                x--
                setQty(x)
            }
        }
        if (parameter === "positive") {
            let x = qty
            x++
            setQty(x)
        }
    }
    const [size, setSize] = React.useState("S")
    const handleSizeChange = (event) => {
        // console.log(event.target.value)
        setSize(event.target.value)
    }
    const handleCartClick = () => {
        // console.log(size, qty, id, token)
        let body = { size, qty, id, token }
        // console.log(body)
        dispatch(postOrders(body))
    }

    return (
        // isLoading ? <div>Loading</div> :
        isLoading ? <ClipLoader color="#B73535" loading={isLoading} css={override} size={150} /> : (
            data &&
            <div className="singleContainer">
                <div className="productImage">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="singleProductInfo">
                    <h1>{data.productName}</h1>
                    {data.returnSale ? <h1 className="singleProductInfoPrice">₹{data.discountPrice}.00 <s>₹{data.price}.00</s></h1> : <h1 className="singleProductInfoPrice">₹ {data.price}.00</h1>}
                    <div className="singleProdDesc">{data.description}</div>
                    <div className="singleProdSize">
                        <p>Select Size</p>
                        <select name="productSize" id="productSize" onChange={handleSizeChange}>
                            <option selected value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </div>
                    <p>Quantity</p>
                    <div className="singleProdQty">
                        <button onClick={() => handleClick("minus")}>-</button>
                        <input type="text" value={qty} min="1" onChange={handleQty} disabled />
                        <button onClick={() => handleClick("positive")}>+</button>
                    </div>
                    {orderedProductId.indexOf(id) !== -1 ? <button className="cartButton cartAddedButton" disabled>Added</button> : <button className="cartButton" onClick={handleCartClick}>Add to Cart</button>}
                </div>
            </div >
        )

    )
}
