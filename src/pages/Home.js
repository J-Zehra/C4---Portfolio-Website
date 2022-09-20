import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Gradient } from '../assets/svg_component/Gradient'

export const Home = () => {
    return (
        <Flex
            h='100vh'
            w='100%'
            justifyContent='center'
            alignItems='center'
            fontWeight='bold'
        >
            <Gradient/>
        </Flex>
    )
}
