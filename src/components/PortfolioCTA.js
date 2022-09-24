import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const PortfolioCTA = () => {
    return (
        <Flex
            w='100%'
            h='22rem'
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            bg='transparent'
            border='1px solid'
            borderColor='palette.accent'
            borderRadius='.5rem'
            gap='2rem'
        >
            <Text
                textAlign='center'
            >
                Message here and another call to action
            </Text>
            <Button>
                Contact me
            </Button>
        </Flex>
    )
}
