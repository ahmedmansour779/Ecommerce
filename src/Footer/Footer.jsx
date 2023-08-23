
import { Container, Flex } from '@mantine/core'
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
import React from 'react'
import { FooterWrapper, MadeBy } from './style'

export default function Footer() {
    return (
        <FooterWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            id='footer'>
            <Container size={"xl"}>
                <div>
                    <span>Amazon Clone | Design :<MadeBy> Ahmed Mansour</MadeBy></span>
                </div>
                <Flex
                    gap="1rem"
                    justify="center"
                    align="center"
                    mt="1rem"
                >
                    <a href='https://www.facebook.com/ahmed.mask.184'>
                        <IconBrandFacebook />
                    </a>
                    <a href='https://twitter.com/ahmedma66567002'>
                        <IconBrandTwitter />
                    </a>
                    <a href='https://www.linkedin.com/in/ahmed-mansour-b6b407213/'>
                        <IconBrandLinkedin />
                    </a>
                    <a href='https://www.youtube.com/channel/UC2is6EFgtUfFbDZbbDwYIoQ'>
                        <IconBrandYoutube color='red' />
                    </a>
                </Flex>
            </Container>
        </FooterWrapper >
    )
}
