import React from 'react'
import img from "../images/home.jpg"
import Product from '../products/Product'
import { HomeComponent, HomeImage, HomeRow } from '../styles/homeStyle'

function Home() {
    return (
        <>
            <HomeComponent
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <div>
                    <HomeImage src={img} alt='image' />
                    <HomeRow>
                        <Product />
                    </HomeRow>
                </div>
            </HomeComponent>
        </>
    )
}

export default Home 