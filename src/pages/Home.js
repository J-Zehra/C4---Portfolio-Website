import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import React, { useContext, useEffect, useRef } from 'react'
import { Gradient } from '../assets/svg_component/Gradient'
import { ApplicationContext } from '../context/AppContext'

import HeroImage from '../assets/heroImage.png'

export const Home = () => {

    const { setActiveNav } = useContext(ApplicationContext)

    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    useEffect(() => {
        if (isInView) {
            setActiveNav(0);
        }
    }, [isInView, setActiveNav])

    return (
        <Flex
            id='home'
            h='110vh'
            justifyContent='center'
            alignItems='center'
            fontWeight='bold'
            ref={ref}
            w={{
                base: '95%',
                sm: '90%',
                lg: '85%',
                xl: '80%',
                '2xl': '75%',
            }}
            margin='auto'
        >
            <Gradient />

            {/* HERO CONTENT */}
            <Flex
                w='100%'
                justifyContent='space-between'
                alignItems='center'
                zIndex='1'
            >
                <Flex
                    flexDir='column'
                    justifyContent='center'
                    alignItems='flex-start'
                    flex='1'
                >
                    {/* TEXTS */}
                    <Text
                        bg='linear-gradient(#E0FBFC ,#A0B6D2)'
                        backgroundClip='text'
                    >
                        Hi, I am Darren,
                    </Text>
                    <Text
                        as='h1'
                        bg='linear-gradient(#E0FBFC ,#8BA8CD)'
                        backgroundClip='text'
                    >
                        Software Engineer.
                    </Text>
                    <Text
                        w='60%'
                        bg='linear-gradient(#E0FBFC ,#A0B6D2)'
                        backgroundClip='text'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat
                    </Text>

                    {/* CTA */}
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap='2.8rem'
                        marginTop='1.5rem'
                    >
                        <Button
                            transition='all .3s ease'
                            p='1.8rem'
                            bg='linear-gradient(#3D5A80 ,#4C6F9D)'
                            _hover={{
                                
                            }}
                        >
                            See my portfolio
                        </Button>
                        <Button
                            variant='flushed'
                            fontSize='.9rem'
                            p='0 0 .1rem 0'
                            borderBottom='1px solid'
                            borderRadius='.1'
                        >
                            Download CV
                        </Button>
                    </Flex>
                </Flex>
                <Box
                    flex='1'
                >
                    <Image
                        src={HeroImage}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}
