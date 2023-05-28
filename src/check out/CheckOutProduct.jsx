import React from 'react'
import { useAuth } from '../context/GlobalState'
import CheckOutProducts from './CheckOutProducts'

function CheckOutProduct() {
    const { basket } = useAuth()


    return (
        <>
            {basket.map((item, index) => {
                return (
                    <CheckOutProducts
                        id={item.id}
                        describe={item.describe}
                        img={item.img}
                        name={item.name}
                        prise={item.prise}
                        rating={item.rating}
                        key={index} />
                )
            })}
        </>
    )
}

export default CheckOutProduct