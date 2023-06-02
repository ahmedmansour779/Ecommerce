
import { Affix, Button, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import React from 'react';
import theme from '../styles/config';

export default function Scroll() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Affix position={{ bottom: rem(20), right: rem(20) }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            bg={theme.textBackgroundColor}
                            c={theme.backgroundColor}
                            h={"none"}
                            variant={theme.textBackgroundColor}
                        ><IconArrowUp size="1rem" /></Button>
                    )}
                </Transition>
            </Affix>
        </>
    );
}
