import { Button, Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ApplicationContext } from '../context/AppContext'

export const MenuContainer = () => {

     // GET THE STATES FROM THE CONTEXT
    const { setToggled, toggled, scrolled, darkMode } = useContext(ApplicationContext)

     // INITIALIZE THE ARRAY OF NAV LINKS TO BE MAPPED
    const navLinks = [
        { link: '#home', label: 'Home' },
        { link: '#about', label: 'About' },
        { link: '#portfolio', label: 'Portfolio' },
    ]

    // ANIMATION VARIANTS
    const container = {
        hidden: { opacity: 0 },
        show: {
            height: toggled ? ['25vh', '25vh', '100vh'] : '2rem',
            width: toggled ? ['25vw', '25vw', '100vw'] : '2rem',
            borderRadius: toggled ? ['50%', '50%', '0'] : '50%',
            left: toggled ? 0 : '',
            top: toggled ? 0 : '',
            opacity: toggled ? 1 : 0,

            transition: {
                type: 'spring',
                bounce: .5,
                stiffness: 110,
                staggerChildren: 0.3,
                delayChildren: 2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <Flex
            bg={darkMode ? 'palette.primary' :  'palette.tertiary'}
            pos='fixed'
            zIndex='-1'
            w='2rem'
            h='2rem'
            right='0'
            borderRadius='50%'
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            gap='1.5rem'

            as={motion.div}
            variants={container}
            initial='hidden'
            animate='show'
        >
            {navLinks.map((nav, index) => {
                return (
                    <Link
                        key={index}
                        href={nav.link}
                        color={darkMode ? 'palette.tertiary' : 'palette.accent'}
                        fontSize='1.2rem'
                        fontWeight='semibold'
                        onClick={() => setToggled(!toggled)}

                        as={motion.a}
                        variants={item}
                    >
                        {nav.label}
                    </Link>
                )
            })}
            {/* Contact */}
            <Button
                bg='transparent'
                color={darkMode ? 'palette.tertiary' : 'palette.accent'}
                border='1px solid'
                borderColor={darkMode ? 'palette.tertiary' : 'palette.accent'}
                transition='all .3s ease'
                fontSize={scrolled ? '.9rem' : '.95rem'}
                href='#contact'
                onClick={() => setToggled(!toggled)}
                _hover={{
                    bg: darkMode ? 'palette.tertiary' : 'palette.accent',
                    color: darkMode ? 'palette.accent' : 'palette.tertiary' ,
                }}

                as={motion.a}
                variants={item}
            >
                Contact
            </Button>
        </Flex>
    )
}
