import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

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
        <Box
            id='contact'
            w='100%'
            paddingBottom='10rem'
            ref={ref}
        >
            <Flex
                marginTop='6rem'
                alignItems='center'
                flexDir='column'
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
            >
                <Box
                    w='100%'
                    marginTop='6rem'
                >
                    <Text
                        textAlign='center'
                        fontSize='1.5rem'
                        marginTop='8rem'

                        // ANIMATION PROPS
                        as={motion.p}
                        initial={{
                            y: 75,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: 'tween',
                                duration: .8,
                                ease: 'easeInOut'
                            }
                        }}
                    >
                        Send us a message
                    </Text>
                    <Text
                        textAlign='center'
                        fontWeight='normal'
                        marginTop='1.2rem'
                        color='palette.tertiary'

                        // ANIMATION PROPS
                        as={motion.p}
                        initial={{
                            y: 75,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: 'tween',
                                duration: .8,
                                ease: 'easeInOut'
                            }
                        }}
                    >
                        Let us hear your ideas. Contact us and let's start working together
                    </Text>
                    <Flex
                        margin='auto'
                        flexDir='column'
                        marginTop='5rem'
                        gap='6rem'
                    >
                        <Flex
                            gap='16rem'
                            flexDir={{
                                base: 'column',
                                md: 'row'
                            }}
                        >
                            <Input
                                placeholder='First Name'
                                variant='flushed'
                                borderColor='palette.accent'
                                color='palette.tertiary'
                                _placeholder={{
                                    color: 'palette.tertiary'
                                }}

                                // ANIMATION PROPS
                                as={motion.input}
                                initial={{
                                    y: 75,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                        duration: .8,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                            <Input
                                placeholder='Last Name'
                                variant='flushed'
                                borderColor='palette.accent'
                                color='palette.tertiary'
                                _placeholder={{
                                    color: 'palette.tertiary'
                                }}

                                // ANIMATION PROPS
                                as={motion.input}
                                initial={{
                                    y: 75,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                        duration: .8,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                        </Flex>
                        <Box>
                            <Input
                                placeholder='Email'
                                variant='flushed'
                                borderColor='palette.accent'
                                color='palette.tertiary'
                                _placeholder={{
                                    color: 'palette.tertiary'
                                }}
                                // ANIMATION PROPS
                                as={motion.input}
                                initial={{
                                    y: 75,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                        duration: .8,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                        </Box>
                        <Box>
                            <Textarea
                                placeholder='Your message here...'
                                h='10rem'
                                variant='flushed'
                                resize='none'
                                borderColor='palette.accent'
                                color='palette.tertiary'
                                _placeholder={{
                                    color: 'palette.tertiary'
                                }}


                                // ANIMATION PROPS
                                as={motion.input}
                                initial={{
                                    y: 75,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'tween',
                                        duration: .8,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                        </Box>
                        <Button
                            bg='palette.accent'
                            w='100%'
                            padding='1.6rem 1.5rem'
                            alignSelf='flex-end'

                            _hover={{}}

                            // ANIMATION PROPS
                            as={motion.button}
                            initial={{
                                y: 75,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'tween',
                                    duration: .8,
                                    ease: 'easeInOut'
                                }
                            }}
                        >
                            Send
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
