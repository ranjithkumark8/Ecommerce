import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productData } from '../../Redux/ProductRedux/action'
import "./SingleProductPage.css"

export const SingleProductPage = () => {
    const [productData, setProductData] = React.useState({})
    const { data } = useSelector((state) => state.productReducer.productData)
    const isLoading = useSelector((state) => state.productReducer.isLoading)
    console.log(data, isLoading)
    const dispatch = useDispatch()
    const { id } = useParams()
    React.useEffect(() => {
        dispatch(productData(id))
    }, [])
    return (
        isLoading ? <div>Loading</div> :
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
                        <select name="productSize" id="productSize">
                            <option value="S" selected>S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </div>
                    <p>Quantity</p>
                    <div className="singleProdQty">
                        <button>-</button>
                        <input type="text" value="1" min="1" />
                        <button>+</button>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
    )
}
