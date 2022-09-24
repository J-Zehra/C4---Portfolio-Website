import { Button, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { FaFolderOpen } from 'react-icons/fa'

export const CTA = ({ ...props }) => {

    const [buttonHover, setButtonHover] = useState(false)
    const [secondaryButtonHover, setSecondaryButtonHover] = useState(false)

    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            gap='2.8rem'
            marginTop='1.5rem'
        >
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
                            <FaFolderOpen
                            />
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
                        Portfolio
                    </Flex>
                </Flex>
            </Button>
            <Button
                pos='relative'
                variant='flushed'
                fontSize='.9rem'
                as={motion.button}
                {...props}
                onHoverStart={() => setSecondaryButtonHover(true)}
                onHoverEnd={() => setSecondaryButtonHover(false)}
                _before={{
                    content:'""',
                    pos: 'absolute',
                    h:'.1rem',
                    w: secondaryButtonHover ? '6rem' : '1rem',
                    bg: 'palette.tertiary',
                    bottom: 0,
                    transition:'all .3s ease'
                }}
            >
                Download CV
            </Button>
        </Flex>
    )
}
