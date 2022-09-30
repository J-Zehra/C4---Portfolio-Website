import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react'

import { RiMenuFoldFill } from 'react-icons/ri'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { ApplicationContext } from '../context/AppContext'
import { MenuContainer } from './MenuContainer'

import { CgDarkMode } from 'react-icons/cg'

export const MobileMenu = () => {

     // GET THE STATES FROM THE CONTEXT
    const { toggled, setToggled, darkMode, setDarkMode } = useContext(ApplicationContext)

    return (
        <Flex
            fontSize='1.6rem'
            pos='relative'
            justifyContent='center'
            alignItems='center'
        >
            <AnimatePresence exitBeforeEnter>
                {toggled ? (
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        gap='1.2rem'
                    >
                        <Flex
                            as={motion.div}
                            layoutId='menu'
                            key='menu'
                            color={darkMode ? 'palette.tertiary' : 'palette.primary'}
                            onClick={() => setToggled(!toggled)}
                            justifyContent='center'
                            alignItems='center'
                            gap='1.2rem'
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
                        </Flex>
                        <Box
                            fontSize='1.8rem'
                            color={darkMode ? 'palette.tertiary' : '#3D5A80'}
                            onClick={() => setDarkMode(!darkMode)}

                            as={motion.div}
                            animate={{
                                rotate: darkMode ? 180 : 0
                            }}
                        >
                            <CgDarkMode />
                        </Box>
                    </Flex>
                ) : (
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        gap='1.2rem'
                    >
                        <Box
                            as={motion.div}
                            layoutId='menu'
                            key='menu2'
                            color={darkMode ? 'palette.primary' :  'palette.tertiary'}
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
                        <Flex
                            fontSize='1.8rem'
                            color={darkMode ? '#3D5A80' : 'palette.tertiary'}
                            onClick={() => setDarkMode(!darkMode)}
                            alignItems='center'

                            as={motion.div}
                            animate={{
                                rotate: darkMode ? 180 : 0
                            }}
                        >
                            <CgDarkMode />
                        </Flex>
                    </Flex>
                )}
            </AnimatePresence>
            <MenuContainer />
        </Flex>
    )
}
