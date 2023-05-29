import React from 'react'
import CheckOutProduct from '../check out/CheckOutProduct'
import TotalPrice from '../check out/TotalPrice'
import { useAuth } from '../context/GlobalState'
import adImag from "../images/ad.jpg"
import { CheckOutHeader, CheckOutLeft, CheckOutWrapper, CheckoutAd, CheckoutTitle } from '../styles/checkOutStyle'

function CheckOut() {
    const { user } = useAuth()

    return (
        <>
            <div className='container'>
                <CheckOutWrapper
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <CheckOutHeader>
                        <CheckOutLeft>
                            <CheckoutAd src={adImag} alt='advertisement' />
                            <p>Hello, {user?.email}</p>
                            <CheckoutTitle>Your shopping Basket</CheckoutTitle>
                        </CheckOutLeft>
                        <TotalPrice />
                    </CheckOutHeader>
                    <CheckOutProduct />
                </CheckOutWrapper>
            </div>
        </>
    )
}

export default CheckOut