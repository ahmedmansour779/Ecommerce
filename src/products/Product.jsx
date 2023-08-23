import { Container } from '@mantine/core'
import React from 'react'
import dataProducts from '../products/dataProduct'
import { HomeRow } from '../styles/homeStyle'
import Products from './Products'

export default function Product() {
    return (
        <>
            <Container size="xl" >
                <HomeRow>
                    {dataProducts.map((item, index) => {
                        return (
                            <Products
                                id={item.id}
                                describe={item.describe}
                                img={item.img}
                                name={item.name}
                                prise={item.prise}
                                rating={item.rating}
                                key={index} />
                        )
                    })}
                </HomeRow>
            </Container>
        </>
    )
}
