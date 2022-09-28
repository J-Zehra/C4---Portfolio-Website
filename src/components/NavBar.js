import { Box, Button, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import Logo from '../assets/Logo.png'
import { ApplicationContext } from '../context/AppContext'
import { MobileMenu } from './MobileMenu'

import { CgDarkMode } from 'react-icons/cg'

export const NavBar = () => {

    const { scrolled, activeNav, darkMode, setDarkMode } = useContext(ApplicationContext)

    const navLinks = [
        { link: '#home', label: 'Home' },
        { link: '#about', label: 'About' },
        { link: '#portfolio', label: 'Portfolio' },
    ]

    const navScrolledStyle = {
        bg: 'palette.secondary',
        h: '4rem',
        boxShadow: '1px 0 10px rgba(0, 0, 0, .050)',
    }
    const lightNavScrolledStyle = {
        bg: '#D4E8F4',
        h: '4rem',
        boxShadow: '1px 0 10px rgba(0, 0, 0, .050)',
    }

    const activeNavStyle = {
        color: 'palette.accent',
        fontWeight: 'bold',
    }

    const activeContactStyle = {
        bg: 'palette.accent',
        color: 'palette.tertiary'
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0 }
    }

    // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
    const [isSmallerThan850] = useMediaQuery('(max-width: 850px)')

    return (
        <Box
            w='100%'
            h='5rem'
            pos='fixed'
            zIndex='2'
            transition='all .3s ease'
            {...scrolled && navScrolledStyle}
            {...scrolled && darkMode && lightNavScrolledStyle}
        >
            <Flex
                w={{
                    base: '95%',
                    sm: '90%',
                    lg: '85%',
                    xl: '80%',
                    '2xl': '75%',
                }}
                h='100%'
                margin='auto'
                alignItems='center'
                justifyContent='space-between'

                as={motion.div}
                variants={container}
                animate='show'
                initial='hidden'
            >
                {/* Logo */}
                <Link 
                    href='#home'
                    as={motion.a}
                    variants={item}
                >
                    <Image
                        transition='all .3s ease'
                        w={scrolled ? '2.9rem' : '3rem'}
                        src={Logo}
                    />
                </Link>

                {/* Navigation Links */}
                {isSmallerThan850 ? (
                    <MobileMenu />
                ) : (
                    <>
                        <Flex
                            alignItems='center'
                            gap='3rem'
                        >
                            {navLinks.map((nav, index) => {
                                return (
                                    <Link
                                        display='flex'
                                        justifyContent='center'
                                        key={index}
                                        href={nav.link}
                                        transition='all .3s ease'
                                        fontSize={scrolled && '.95rem'}
                                        pos='relative'
                                        {...activeNav === index && activeNavStyle}
                                        _hover={{
                                            color: 'palette.accent'
                                        }}

                                        as={motion.a}
                                        variants={item}
                                    >
                                        {nav.label}
                                        {activeNav === index && (
                                            <Box
                                                pos='absolute'
                                                bottom='-.6rem'
                                                w='.5rem'
                                                h='.5rem'
                                                borderRadius='50%'
                                                bg='palette.accent'
                                                as={motion.div}
                                                layoutId
                                            />
                                        )}
                                    </Link>
                                )
                            })}
                        </Flex>

                        {/* Contact */}
                        <Flex
                            alignItems='center'
                            gap='1rem'
                        >
                            <Button
                                bg='transparent'
                                color='palette.accent'
                                border='1px solid'
                                borderColor='palette.accent'
                                transition='all .3s ease'
                                fontSize={scrolled ? '.9rem' : '.95rem'}
                                href='#contact'
                                {...activeNav === 3 && activeContactStyle}
                                _hover={{
                                    bg: 'palette.accent',
                                    color: 'palette.tertiary'
                                }}
                                as={motion.a}
                                variants={item}
                            >
                                Contact
                            </Button>
                            <Box
                                fontSize='1.8rem'
                                color='#3D5A80'
                                onClick={() => setDarkMode(!darkMode)}

                                as={motion.div}
                                variants={item}
                                animate={{
                                    rotate: darkMode ? 180 : 0
                                }}
                            >
                                <CgDarkMode/>
                            </Box>
                        </Flex>

                    </>
                )}
            </Flex>
        </Box>
    )
}
