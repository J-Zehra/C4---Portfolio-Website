import { Button, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { ApplicationContext } from '../context/AppContext'

export const CustomButton = ({ leftIcon, text, ...props }) => {

    const [buttonHover, setButtonHover] = useState(false)
    const { darkMode } = useContext(ApplicationContext)

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
                    bg={darkMode ? 'palette.primary' : 'palette.tertiary'}
                    h='100%'
                    transition='all .3s ease'
                    w={buttonHover ? '50%' : '5%'}
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='.5rem 0 0 .5rem'
                    opacity={buttonHover ? '1' : '.7'}
                >
                    <Text
                        color={darkMode ? 'palette.tertiary' : '#293241'}
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
                    color='palette.tertiary'
                >
                    {text}
                </Flex>
            </Flex>
        </Button>
    )
}
