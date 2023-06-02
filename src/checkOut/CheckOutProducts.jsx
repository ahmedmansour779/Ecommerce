import { Rating } from "@mantine/core";
import { useAuth } from "../context/GlobalState";
import { CheckOutProductImage, CheckOutProductPrice, CheckOutProductWrapper, CheckoutProductInfo } from "../styles/checkOutProductStyle";
import { RatingWrapper } from "../styles/productStyle";

export default function CheckOutProducts({ id, describe, prise, rating, img, name }) {
    const { dispatch } = useAuth()

    const removeFromBasket = () => {
        const test = window.confirm("Are you sure you want Delete this?")
        if (test) {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                item: {
                    id: id,
                }
            })
        }
    }
    return (
        <>
            <CheckOutProductWrapper key={id} id={id}>
                <CheckOutProductImage src={img} alt={name} />
                <CheckoutProductInfo>
                    <b>{describe}</b>
                    <CheckOutProductPrice>
                        <b>{prise} $</b>
                    </CheckOutProductPrice>
                    <RatingWrapper>
                        <Rating fractions={2} defaultValue={rating} readOnly />
                    </RatingWrapper>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </CheckoutProductInfo>
            </CheckOutProductWrapper>
        </>
    )
}
