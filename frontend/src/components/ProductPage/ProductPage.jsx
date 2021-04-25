import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { categoryData, MenData, productData } from '../../Redux/ProductRedux/action'
import "./ProductPage.css"

export const ProductPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation();
    const data = useSelector((state) => state.productReducer.mensData)
    const filtersData = useSelector((state) => state.productReducer.categoryData)
    const [currentProductId, setCurrentProductId] = React.useState(" ")
    const [filtersShow, setFiltersShow] = React.useState(false)
    // const [data, setData] = React.useState([])
    let categoryPath = location.pathname
    // console.log(filtersData)

    React.useEffect(() => {
        let categoryArray = categoryPath.split("/")
        let category = categoryArray[categoryArray.length - 1]
        // console.log(category)
        if (category.trim() === "Mens") {
            setCurrentProductId("60784205bbbd6a4acc8250a4")
            setFiltersShow(true)
        } else if (category.trim() === "Womens") {
            setCurrentProductId("6078423fbbbd6a4acc8250a5")
            setFiltersShow(true)
        } else {
            setFiltersShow(false)
        }
        dispatch(MenData(category))
        dispatch(categoryData())
    }, [categoryPath])

    const handleClick = (id) => {
        dispatch(productData(id))
        history.push(`/collections/${id}`)
    }

    const handleFilter = (filterID) => {
        // console.log(filterID)
        if (filterID === 7) {
            // const { data } = useSelector((state) => state.productReducer.mensData)
        }

    }
    return (
        <>
            {filtersShow &&

                <div>
                    <span onClick={() => handleFilter(7)}>Shop By - | All |</span>
                    {filtersData?.map((filter) => <span onClick={() => handleFilter(filter._id)}> {filter.tagName} |</span>)}
                </div>}
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
        </>
    )
}
