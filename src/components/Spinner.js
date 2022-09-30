import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Lottie from 'react-lottie-player'

import loadingAnimation from '../assets/loadingAnimation.json'

export const Spinner = () => {
    return (
        <Flex
            pos='fixed'
            h='100vh'
            w='100vw'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                w='25%'
            >
                <Lottie
                    loop
                    animationData={loadingAnimation}
                    play
                />
            </Box>
        </Flex>
    )
}
