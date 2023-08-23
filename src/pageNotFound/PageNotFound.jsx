import { Container } from '@mantine/core'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../components/Header'
import img from "../images/login-logo-black.png"
import { PageNotFoundUp, PageNotFoundWrapper } from './style'

export default function PageNotFound() {
    return (
        <>
            <PageNotFoundUp>
                <Header />
                <PageNotFoundWrapper
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <Container size={"xl"}>
                        <img src={img} alt="logo" />
                        <h1>Page Not Found</h1>
                        <p>Error 404</p>
                    </Container>
                </PageNotFoundWrapper>
                <Footer />
            </PageNotFoundUp>
        </>
    )
}
