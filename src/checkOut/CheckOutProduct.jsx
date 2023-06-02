import React from 'react'
import { useAuth } from '../context/GlobalState'
import { NotProduct } from '../styles/checkOutProductStyle'
import CheckOutProducts from './CheckOutProducts'

function CheckOutProduct() {
    const { basket } = useAuth()

    return (
        <>
            {basket.length > 0
                ? basket.map((item, index) => {
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
                }) :
                <NotProduct
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >you not chose any product</NotProduct>
            }
        </>
    )
}

export default CheckOutProduct