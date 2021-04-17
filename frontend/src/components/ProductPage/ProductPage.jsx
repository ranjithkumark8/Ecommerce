import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { MenData, productData } from '../../Redux/ProductRedux/action'
import "./ProductPage.css"

export const ProductPage = () => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.productReducer.mensData)
    // console.log(data)
    const location = useLocation();
    let categoryPath = location.pathname
    const history = useHistory()
    // console.log(location.pathname)
    React.useEffect(() => {
        // console.log("Mens Page")
        let categoryArray = categoryPath.split("/")
        let category = categoryArray[categoryArray.length - 1]
        // console.log(categoryArray, category)
        dispatch(MenData(category))
    }, [categoryPath])

    const handleClick = (id) => {
        dispatch(productData(id))
        history.push(`/collections/${id}`)
    }
    return (
        <div className="ProductContainer">
            {data?.map((product) => (
                <div key={product._id} className="singleProduct" onClick={() => { handleClick(product._id) }}>
                    <div className="ProductContainerImg">
                        <img src={product.image} alt={product.name} width="300px" />
                    </div>
                    <div className="productInfo">
                        <div className="productInfoHeader">
                            <h6>{product.category.category} | {product.tags.tagName}</h6>
                            <h3>{product.productName}</h3>
                        </div>
                        {product.returnSale ? <div className="productInfoPrice">₹{product.discountPrice}.00 <s>₹{product.price}.00</s></div > : <div className="productInfoPrice">₹ {product.price}.00</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}
