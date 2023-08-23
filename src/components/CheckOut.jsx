import { Container } from '@mantine/core'
import React from 'react'
import CheckOutProduct from '../checkOut/CheckOutProduct'
import TotalPrice from '../checkOut/TotalPrice'
import { useAuth } from '../context/GlobalState'
import adImag from "../images/ad.jpg"
import { CheckOutHeader, CheckOutLeft, CheckOutWrapper, CheckoutAd, CheckoutTitle } from '../styles/checkOutStyle'

function CheckOut() {
    const { user } = useAuth()

    return (
        <>
            <Container size="xl">
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
            </Container>
        </>
    )
}

export default CheckOut