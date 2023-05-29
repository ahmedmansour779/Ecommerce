import { Checkbox } from '@mantine/core'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from '../context/AppReducer'
import { useAuth } from '../context/GlobalState'
import { TotalPriceWrapper } from '../styles/totalPriceStyle'

function TotalPrice() {
    const { basket } = useAuth()
    const navigate = useNavigate()
    return (
        <>
            <TotalPriceWrapper>
                <CurrencyFormat
                    renderText={(value) => (
                        <p>Total Price ({basket.length} items): {value}</p>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <Checkbox label="This order contains a gift" />
                <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
            </TotalPriceWrapper>
        </>
    )
}

export default TotalPrice