import { Container, Flex, Grid, Text } from '@mantine/core';
import { motion } from "framer-motion";
import React from 'react';
import CheckOutProduct from '../checkOut/CheckOutProduct';
import { useAuth } from '../context/GlobalState';


export default function Orders() {
    const { user, basket } = useAuth()
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container size="lg">
                <Grid grow gutter="2rem" pt={"2rem"} pb={"2rem"}>
                    <Grid.Col xs={4} span={12}>
                        <Text fz="xl">
                            Hallo
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={8} span={12}>
                        <Text fz="lg">
                            {user ? user.email : "You must login"}
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={4} span={12}>
                        <Text fz="xl">
                            Your Order
                        </Text>
                    </Grid.Col>
                    <Grid.Col xs={8} span={12}>
                        {basket ?
                            <Flex
                                gap="span"
                                justify="flex-start"
                                align="flex-start"
                                direction="column"
                                wrap="wrap">
                                <CheckOutProduct />
                            </Flex>
                            : "You must login"}
                    </Grid.Col>
                </Grid>
            </Container>
        </motion.div>
    )
}
