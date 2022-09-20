import { Box, Button, Flex, Image, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'

import Logo from '../assets/Logo.png'
import { ApplicationContext } from '../context/AppContext'

export const NavBar = () => {

    const { scrolled } = useContext(ApplicationContext)
    const [active, setActive] = useState(0)

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

    const activeNavStyle = {
        color: 'palette.accent',
        fontWeight: 'bold',
    }

    return (
        <Box
            w='100%'
            h='5rem'
            pos='fixed'
            zIndex='1'
            transition='all .3s ease'
            {...scrolled && navScrolledStyle}
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
            >
                {/* Logo */}
                <Link href='#home'>
                    <Image
                        transition='all .3s ease'
                        w={scrolled ? '4.9rem' : '5rem'}
                        src={Logo}
                    />
                </Link>

                {/* Navigation Links */}
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
                                {...active === index && activeNavStyle}
                                onClick={() => setActive(index)}
                                _hover={{
                                    color: 'palette.accent'
                                }}
                            >
                                {nav.label}
                                    {active === index && (
                                        <Box
                                            pos='absolute'
                                            bottom='-.6rem'
                                            w='.5rem'
                                            h='.5rem'
                                            borderRadius='50%'
                                            bg='palette.accent'
                                            as={motion.div}
                                            layoutId
                                        >

                                        </Box>
                                    )}
                            </Link>
                        )
                    })}
                </Flex>

                {/* Contact */}
                <Button
                    bg='transparent'
                    color='palette.accent'
                    border='1px solid'
                    borderColor='palette.accent'
                    transition='all .3s ease'
                    fontSize={scrolled ? '.9rem' : '.95rem'}
                    _hover={{
                        bg: 'palette.accent',
                        color: 'palette.tertiary'
                    }}
                >
                    Contact
                </Button>
            </Flex>
        </Box>
    )
}
