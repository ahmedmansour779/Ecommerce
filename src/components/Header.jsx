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
    console.log(basket.length)

    return (
        <HeaderWrapperUp
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className='container'>
                <HeaderWrapper>
                    <Link to="/">
                        <HeaderLogo src={Logo} alt='logo-img' />
                    </Link>
                    <HeaderSearch>
                        <HeaderSearchInput className='header-searchInput' placeholder='search' type='text' />
                        <IconSearch />
                    </HeaderSearch>
                    <HeaderNav>
                        <Link to={!user && "/login"} >
                            <HeaderOption >
                                <HeaderOptionLineOne>
                                    hello {user ? user.email : "Guest"}
                                </HeaderOptionLineOne>
                                <HeaderOptionLineTwo onClick={signOut}>
                                    {user ? "Sign Out" : "Sign In"}
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
                        <Link to="/" >
                            <HeaderOptionBasket>
                                <IconBasket />
                                <HeaderBasketCount>
                                    {basket?.length}
                                </HeaderBasketCount>
                            </HeaderOptionBasket>
                        </Link>
                    </HeaderNav>
                </HeaderWrapper>
            </div>
        </HeaderWrapperUp>
    )
}
