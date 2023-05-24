
import { IconArrowUp } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { ScrollButton } from './scrollStyle';

export default function Scroll() {
    const [visible, setVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 50) {
                return setVisible(true)
            }
            return setVisible(false)
        };
        window.addEventListener('scroll', toggleVisible);
    }, [])

    return (
        <>
            <ScrollButton
                id="myBtn"
                title="Go to top"
                style={{ display: visible ? 'flex' : 'none' }}
                onClick={scrollToTop}>
                <IconArrowUp size={"2.5rem"} />
            </ScrollButton>
        </>
    )
}
