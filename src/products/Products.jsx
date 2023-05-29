import { Rating } from '@mantine/core'
import React from 'react'
import { useAuth } from "../context/GlobalState"
import { ProductInfo, ProductPrice, ProductWrapper, RatingWrapper } from '../styles/productStyle'

function Products({ id, describe, prise, rating, img, name }) {
    const { dispatch } = useAuth()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                describe: describe,
                prise: prise,
                rating: rating,
                img: img,
                name: name,
            }
        })
    }

    return (
        <>
            <ProductWrapper key={id} id={id}>
                <ProductInfo>
                    <b>{describe}</b>
                    <ProductPrice>
                        <b>{prise} $</b>
                    </ProductPrice>
                </ProductInfo>
                <RatingWrapper>
                    <Rating fractions={2} defaultValue={rating} readOnly />
                </RatingWrapper>
                <img src={img} alt={name} />
                <button onClick={addToBasket}>Add to Basket</button>
            </ProductWrapper>
        </>
    )
}

export default Products