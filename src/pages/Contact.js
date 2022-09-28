import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

import Lottie from 'react-lottie-player'
import lottieJson from '../assets/lottieJson.json'
import { Wave } from '../assets/svg_component/Wave';

import { container, item } from '../miscellaneous/motionVariants'

export const Contact = () => {

    const { setActiveNav, darkMode } = useContext(ApplicationContext)

    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    useEffect(() => {
        if (isInView) {
            setActiveNav(3);
        }
    }, [isInView, setActiveNav])

    return (
        <>
            <Wave />
            <Box
                id='contact'
                w='100%'
                ref={ref}
                bg={darkMode ? '#D4E8F4' : 'palette.secondary'}
                paddingBottom='5rem'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    h='100%'
                    gap='1rem'
                    margin='auto'
                    flexDir={{
                        base: 'column',
                        md: 'row'
                    }}
                    w={{
                        base: '95%',
                        sm: '90%',
                        lg: '85%',
                        xl: '80%',
                        '2xl': '75%',
                    }}

                    as={motion.div}
                    variants={container}
                    whileInView='show'
                    initial='hidden'
                >
                    <Box
                        flex='1'
                        w='100%'

                        as={motion.div}
                        variants={item}
                    >
                        <Lottie
                            loop
                            animationData={lottieJson}
                            play
                        //style={{ width: 350, height: 350 }}
                        />
                    </Box>
                    <Box
                        w='100%'
                        flex='1'
                    >
                        <Text
                            textAlign='center'
                            fontSize='1.6rem'
                            fontWeight='bold'
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            as={motion.p}
                            variants={item}
                        >
                            Send us a message
                        </Text>
                        <Text
                            textAlign='center'
                            fontWeight='normal'
                            marginTop='1.2rem'
                            color='palette.tertiary'
                            fontSize='.85rem'
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            as={motion.p}
                            variants={item}
                        >
                            Let us hear your ideas. Contact us and let's start working together
                        </Text>
                        <Flex
                            margin='auto'
                            flexDir='column'
                            marginTop='5rem'
                            gap='2rem'

                            as={motion.div}
                            variants={item}
                        >
                            <Flex
                                gap={{
                                    base: '2rem',
                                    md: '6rem'
                                }}
                                flexDir={{
                                    base: 'column',
                                    md: 'row'
                                }}
                            >
                                <Input
                                    placeholder='First Name'
                                    bg={darkMode ? '#C7DBEE' : 'palette.primary'}
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: '#A0B6D2',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                                <Input
                                    placeholder='Last Name'
                                    bg={darkMode ? '#C7DBEE' : 'palette.primary'}
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: '#A0B6D2',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                            </Flex>
                            <Box>
                                <Input
                                    placeholder='Email'
                                    bg={darkMode ? '#C7DBEE' : 'palette.primary'}
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: '#A0B6D2',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                            </Box>
                            <Box>
                                <Textarea
                                    placeholder='Your message here...'
                                    textAlign='start'
                                    p='1.5rem'
                                    h='12rem'
                                    border='none'
                                    bg={darkMode ? '#C7DBEE' : 'palette.primary'}
                                    resize='none'
                                    _placeholder={{
                                        color: '#A0B6D2',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.textarea}
                                    variants={item}
                                />
                            </Box>
                            <Button
                                bg='palette.accent'
                                w='100%'
                                padding='1.6rem 1.5rem'
                                alignSelf='flex-end'
                                _hover={{}}
                                as={motion.button}
                                variants={item}
                                color='palette.tertiary'
                            >
                                Send
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
