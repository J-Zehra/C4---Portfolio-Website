import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

import BG from '../assets/aboutBg.png'
import ProfilePicture from '../assets/aboutImage.png'
import { CustomButton } from '../components/CustomButton';
import { BiDownload } from 'react-icons/bi'

import { container, item } from '../miscellaneous/motionVariants'

export const About = () => {

    const { setActiveNav } = useContext(ApplicationContext)

    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    useEffect(() => {
        if (isInView) {
            setActiveNav(1);
        }
    }, [isInView, setActiveNav])

    return (
        <Box
            id='about'
            w='100%'
            ref={ref}
        >
            <Flex
                justifyContent='center'
                flexDir='column'
                gap='15rem'
                margin='auto'
                w={{
                    base: '95%',
                    sm: '90%',
                    lg: '85%',
                    xl: '80%',
                    '2xl': '75%',
                }}
            >
                <Box>
                    <Text
                        textAlign='center'
                        fontSize='1.5rem'
                        marginTop='8rem'
                        fontWeight='bold'
                    >
                        About
                    </Text>

                    <Text
                        textAlign='center'
                        fontSize='1rem'
                        fontWeight='normal'
                    >
                        Get to know me
                    </Text>
                </Box>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'

                    as={motion.div}
                    variants={container}
                    whileInView='show'
                    initial='hidden'
                >
                    <Box
                        flex='1'
                    >
                        <Image
                            src={ProfilePicture}
                            w='50%'

                            as={motion.img}
                            variants={item}
                        />
                    </Box>
                    <Flex
                        justifyContent='center'
                        alignItems='start'
                        flex='1'
                        flexDir='column'
                        pos='relative'
                    >
                        <Image
                            src={BG}
                            transform='scale(1.2)'
                            pos='absolute'
                            zIndex='-1'
                            left='-2.5rem'

                            as={motion.img}
                            variants={item}
                        />
                        <Text
                            bg='linear-gradient(#E0FBFC ,#A0B6D2)'
                            backgroundClip='text'

                            as={motion.p}
                            variants={item}
                        >
                            My name is,
                        </Text>
                        <Text
                            bg='linear-gradient(#E0FBFC ,#8BA8CD)'
                            backgroundClip='text'
                            
                            as={motion.h1}
                            variants={item}
                        >
                            Darren Jay Angulo
                        </Text>
                        <Text
                            w='60%'
                            bg='linear-gradient(#E0FBFC ,#A0B6D2)'
                            backgroundClip='text'
                            
                            as={motion.p}
                            variants={item}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat
                        </Text>
                        <CustomButton
                            text='Download CV'
                            leftIcon={<BiDownload />}
                            marginTop='1.5rem'
                            variants={item}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
