import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

import Lottie from 'react-lottie-player'
import lottieJson from '../assets/lottieJson.json'
import { Wave } from '../assets/svg_component/Wave';

import { container, item } from '../miscellaneous/motionVariants'

export const Contact = () => {

    const { setActiveNav } = useContext(ApplicationContext)

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
                h='100vh'
                ref={ref}
                bg='palette.secondary'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    h='100%'
                    gap='1rem'
                    margin='auto'
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
                                gap='6rem'
                                flexDir={{
                                    base: 'column',
                                    md: 'row'
                                }}
                            >
                                <Input
                                    placeholder='First Name'
                                    bg='palette.primary'
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: 'palette.tertiary',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                                <Input
                                    placeholder='Last Name'
                                    bg='palette.primary'
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: 'palette.tertiary',
                                        fontSize: '.8rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                            </Flex>
                            <Box>
                                <Input
                                    placeholder='Email'
                                    bg='palette.primary'
                                    border='none'
                                    p='1.5rem'
                                    _placeholder={{
                                        color: 'palette.tertiary',
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
                                    bg='palette.primary'
                                    resize='none'
                                    _placeholder={{
                                        color: 'palette.tertiary',
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
