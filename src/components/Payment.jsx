import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import CheckOutProduct from '../check out/CheckOutProduct'
import { getBasketTotal } from '../context/AppReducer'
import { useAuth } from '../context/GlobalState'
import { PaymentSection, PaymentWrapper } from '../styles/paymentStyle'

function Payment() {
    const { basket, user } = useAuth()
    return (
        <div className='container'>
            <PaymentWrapper>
                <h1>
                    Checkout (<Link to="/checkout"><span>{basket.length} items</span></Link>)
                </h1>
                <PaymentSection>
                    <h3>Your email</h3>
                    <p>{user?.email}</p>
                </PaymentSection>
                <PaymentSection>
                    <h3>Review items and delivery</h3>
                    <div>
                        <CheckOutProduct />
                    </div>
                </PaymentSection>
                <PaymentSection>
                    <h3>Payment Method</h3>
                    <div>
                        <input type='text' />
                        <CurrencyFormat
                            renderText={(value) => (
                                <h4>Order Total : {value}$ </h4>)}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                        <button>Bay Now</button>
                    </div>
                </PaymentSection>
            </PaymentWrapper>
        </div>
    )
}

export default Payment