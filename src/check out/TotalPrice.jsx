import { Checkbox } from '@mantine/core'
import React from 'react'
import { useAuth } from '../context/GlobalState'
import { TotalPriceWrapper } from '../styles/totalPriceStyle'

function TotalPrice() {
    const { basket } = useAuth()



    return (
        <TotalPriceWrapper>
            <p>Total Price ({basket.length}): $746.95</p>
            <Checkbox label="This order contains a gift" />
            <button>Proceed to Checkout</button>
        </TotalPriceWrapper>
    )
}

export default TotalPrice