import { Button, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export const CustomButton = ({ leftIcon, text, ...props }) => {

    const [buttonHover, setButtonHover] = useState(false)

    return (
        <Button
            transition='all .3s ease'
            bg='transparent'
            p='0'
            w='12rem'
            h='3.5rem'
            as={motion.a}
            href='#portfolio'
            onHoverStart={() => setButtonHover(true)}
            onHoverEnd={() => setButtonHover(false)}
            _hover={{}}
            {...props}
        >
            <Flex
                bg='transparent'
                w='100%'
                h='100%'
                borderEndRadius='.5rem'
                overflow='hidden'
            >
                <Flex
                    bg='palette.tertiary'
                    h='100%'
                    transition='all .3s ease'
                    w={buttonHover ? '50%' : '5%'}
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='.5rem 0 0 .5rem'
                    opacity={buttonHover ? '1' : '.7'}
                >
                    <Text
                        color='#293241'
                        fontSize='1.2rem'
                        transition='all .3s ease'
                        opacity={buttonHover ? '1' : '0'}
                    >
                        {leftIcon}
                    </Text>
                </Flex>
                <Flex
                    bg='palette.accent'
                    h='100%'
                    w='100%'
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='0 .5rem .5rem 0'
                    border='3px solid'
                    borderColor='palette.accent'
                >
                    {text}
                </Flex>
            </Flex>
        </Button>
    )
}
