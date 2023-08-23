import { Container } from '@mantine/core'
import { IconBasket, IconSearch } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/GlobalState'
import { auth } from '../firebase'
import Logo from "../images/login-logo.png"
import { HeaderBasketCount, HeaderLogo, HeaderNav, HeaderOption, HeaderOptionBasket, HeaderOptionLineOne, HeaderOptionLineTwo, HeaderSearch, HeaderSearchInput, HeaderWrapper, HeaderWrapperUp } from '../styles/headerStyle'

export default function Header() {
    const { user, basket } = useAuth()
    const signOut = () => {
        auth.signOut()
    }

    return (
        <HeaderWrapperUp
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Container size="xl">
                <HeaderWrapper >
                    <Link to="/">
                        <HeaderLogo src={Logo} alt='logo-img' />
                    </Link>
                    <HeaderSearch>
                        <HeaderSearchInput placeholder='search' type='text' />
                        <IconSearch style={{ padding: "5px", height: "22px!important", backgroundColor: "#cd9042", marginLeft: "-40px" }} />
                    </HeaderSearch>
                    <HeaderNav>
                        <Link to={!user && "/login"} >
                            <HeaderOption >
                                <HeaderOptionLineOne>
                                    Hello {user ? user.email : "Guest"}
                                </HeaderOptionLineOne>
                                <HeaderOptionLineTwo onClick={signOut}>
                                    {user ? "LogOut" : "Sign In"}
                                </HeaderOptionLineTwo>
                            </HeaderOption>
                        </Link>
                        <Link to="/orders" >
                            <HeaderOption>
                                <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
                                <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
                            </HeaderOption>
                        </Link>
                        <HeaderOption>
                            <HeaderOptionLineOne>Your</HeaderOptionLineOne>
                            <HeaderOptionLineTwo>Prime</HeaderOptionLineTwo>
                        </HeaderOption>
                        <Link to="/checkout" >
                            <HeaderOptionBasket>
                                <IconBasket />
                                <HeaderBasketCount>
                                    {basket?.length}
                                </HeaderBasketCount>
                            </HeaderOptionBasket>
                        </Link>
                    </HeaderNav>
                </HeaderWrapper>
            </Container>
        </HeaderWrapperUp>
    )
}
