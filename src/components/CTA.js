import { Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'

import { FaFolderOpen } from 'react-icons/fa'
import { ApplicationContext } from '../context/AppContext'
import { CustomButton } from './CustomButton'

export const CTA = ({ ...props }) => {

    const { darkMode } = useContext(ApplicationContext)
    const [secondaryButtonHover, setSecondaryButtonHover] = useState(false)

    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            gap='2.8rem'
            marginTop='1.5rem'
        >
            <CustomButton
                leftIcon={<FaFolderOpen/>}
                text='Portfolio'
                {...props}
            />
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
                    bg: darkMode ? 'palette.primary' : 'palette.tertiary',
                    bottom: 0,
                    transition:'all .3s ease'
                }}
            >
                Download CV
            </Button>
        </Flex>
    )
}
