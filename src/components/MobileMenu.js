import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react'

import { RiMenuFoldFill } from 'react-icons/ri'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { ApplicationContext } from '../context/AppContext'
import { MenuContainer } from './MenuContainer'

export const MobileMenu = () => {

    const { toggled, setToggled } = useContext(ApplicationContext)

    return (
        <Flex
            fontSize='1.6rem'
            pos='relative'
            justifyContent='center'
            alignItems='center'
        >
            <AnimatePresence exitBeforeEnter>
                {toggled ? (
                    <Box
                        as={motion.div}
                        layoutId='menu'
                        key='menu'
                        color='palette.primary'
                        onClick={() => setToggled(!toggled)}
                        initial={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.2
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                    >
                        <RiMenuFoldFill />
                    </Box>
                ) : (
                    <Box
                        as={motion.div}
                        layoutId='menu'
                        key='menu2'
                        color='palette.tertiary'
                        onClick={() => setToggled(!toggled)}
                        initial={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.2
                        }}
                        whileHover={{
                            scale: 1.1
                        }}

                    >
                        <RiMenuUnfoldFill />
                    </Box>
                )}
            </AnimatePresence>
            <MenuContainer/>
        </Flex>
    )
}
