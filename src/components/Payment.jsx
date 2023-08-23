import { Container } from "@mantine/core"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { doc, setDoc } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import axios from "../axios"
import CheckOutProduct from '../checkOut/CheckOutProduct'
import { getBasketTotal } from '../context/AppReducer'
import { useAuth } from '../context/GlobalState'
import { db } from "../firebase"
import { CreditCart, PaymentSection, PaymentWrapper } from '../styles/paymentStyle'

function Payment() {
    const { basket, user, dispatch } = useAuth()
    const [clientSecret, setClientSecret] = useState()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const stripe = useStripe()
    const elements = useElements();
    const navigate = useNavigate();
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
            return response;
        }
        getClientSecret()
    }, [basket])
    const handelSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true);
        navigate("/orders", { replace: true });
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
            setDoc(ref, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: "EMPTY_BASKET",
            });
            console.log("test 2")
        })
        payload()
    }
    const handelChange = (e) => {
        setDisabled(e.empty)
        setError(error ? error.message : "")
    }
    return (
        <Container size="xl">
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
                    <form onSubmit={handelSubmit}>
                        <CreditCart>
                            <CardElement onChange={handelChange} />
                        </CreditCart>
                        <CurrencyFormat
                            renderText={(value) => (<h4>Order Total : {value}$</h4>)}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                        <button
                            type="submit"
                            disabled={processing || disabled || succeeded}
                        >{processing ? "processing" : "Buy Now"}</button>
                        {error && <div>{error}</div>}
                    </form>
                </PaymentSection>
            </PaymentWrapper>
        </Container>
    )
}

export default Payment