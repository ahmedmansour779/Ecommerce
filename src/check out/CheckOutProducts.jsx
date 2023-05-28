import { Rating } from "@mantine/core";
import { CheckOutProductImage, CheckOutProductPrice, CheckOutProductWrapper, CheckoutProductInfo } from "../styles/checkOutProductStyle";
import { RatingWrapper } from "../styles/productStyle";

export default function CheckOutProducts({ id, describe, prise, rating, img, name }) {
    return (
        <>
            <CheckOutProductWrapper key={id} id={id}>
                <CheckOutProductImage src={img} alt={name} />
                <CheckoutProductInfo>
                    <b>{describe}</b>
                    <CheckOutProductPrice>
                        <b>{prise}</b>
                    </CheckOutProductPrice>
                    <RatingWrapper>
                        <Rating fractions={2} defaultValue={rating} readOnly />
                    </RatingWrapper>
                    <button>Remove from Basket</button>
                </CheckoutProductInfo>
            </CheckOutProductWrapper>
        </>
    )
}
