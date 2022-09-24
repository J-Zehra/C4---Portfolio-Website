import { Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { FaFolderOpen } from 'react-icons/fa'

export const CTA = ({ ...props }) => {

    const [buttonHover, setButtonHover] = useState(false)

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
                        w={buttonHover ? '50%' : '0'}
                        alignItems='center'
                        justifyContent='center'
                    //borderRadius='.5rem 0 0 .5rem'
                    >
                        <FaFolderOpen
                            color='#293241'
                            fontSize='1.2rem'
                        />
                    </Flex>
                    <Flex
                        bg='palette.accent'
                        h='100%'
                        w='100%'
                        alignItems='center'
                        justifyContent='center'
                        borderRadius={buttonHover ? '0 .5rem .5rem 0' : '.5rem'}
                    >
                        Portfolio
                    </Flex>
                </Flex>
            </Button>
            <Button
                variant='flushed'
                fontSize='.9rem'
                p='0 0 .1rem 0'
                borderBottom='1px solid'
                borderRadius='.1'
                _hover={{
                    color: 'palette.accent'
                }}
                {...props}
            >
                Download CV
            </Button>
        </Flex>
    )
}
