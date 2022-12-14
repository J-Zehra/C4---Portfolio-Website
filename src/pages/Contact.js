import { Box, Button, Flex, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ApplicationContext } from '../context/AppContext';

import Lottie from 'react-lottie-player'
import lottieJson from '../assets/lottieJson.json'
import { Wave } from '../assets/svg_component/Wave';
import { emailService } from '../services/emailService.'

import { container, item } from '../miscellaneous/motionVariants'

export const Contact = () => {

    // GET THE STATES FROM THE CONTEXT
    const { setActiveNav, darkMode } = useContext(ApplicationContext)

    // INITIALIZE THE TOAST
    const toast = useToast();

    // INITIALIZE THE PARAMETERS TO BE SENT TO THE API
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    // SET THE ACTIVE NAV TO BE THE INDEX 0 WHEN THIS COMPONENT IS VISIBLE ON THE SCREEN
    useEffect(() => {
        if (isInView) {
            setActiveNav(3);
        }
    }, [isInView, setActiveNav])

    // SEND MAIL FUNCTION THAT WILL RUN WHENEVER THE SEND BUTTON IS CLICKED
    const sendEmail = () => {

        // CHECK IF THE FIELDS ARE ALL FILLED. OTHERWISE THROW AN ERROR TOAST
        if (!firstName || !lastName || !email || !message) {
            toast({
                title: 'Error',
                description: "Please fill all the fields",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return
        }

        // SET THE PARAMS
        const params = {
            firstName,
            lastName,
            email,
            message,
            myEmail: process.env.REACT_APP_EMAILJS_OWNER_EMAIL
        }

        // SEND THE PARAMETERS TO THE EMAIL SERVICE
        emailService(params);

        // THROW A SUCCESS TOAST AFTER ACCOMPLISHING
        toast({
            title: 'Sent',
            description: "Will get back to you shortly",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })

        // SET ALL THE INPUT FIELDS BACK TO AN EMPTY STRING
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
    }

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
                    viewport={{ once: true }}
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
                            fontSize='2.5rem'
                            fontWeight='bold'
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            as={motion.p}
                            variants={item}
                        >
                            Send me a message
                        </Text>
                        <Text
                            textAlign='center'
                            fontWeight='normal'
                            marginTop='1.2rem'
                            color='palette.tertiary'
                            fontSize='1rem'
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            as={motion.p}
                            variants={item}
                        >
                            Contact me for more info and let's start working together
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
                                    md: '2rem'
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
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    _placeholder={{
                                        color: darkMode ? 'palette.accent' : 'palette.tertiary',  
                                        fontSize: '1rem'
                                    }}
                                    as={motion.input}
                                    variants={item}
                                />
                                <Input
                                    placeholder='Last Name'
                                    bg={darkMode ? '#C7DBEE' : 'palette.primary'}
                                    border='none'
                                    p='1.5rem'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    _placeholder={{
                                        color: darkMode ? 'palette.accent' : 'palette.tertiary',  
                                        fontSize: '1rem'
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    _placeholder={{
                                        color: darkMode ? 'palette.accent' : 'palette.tertiary',  
                                        fontSize: '1rem'
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    _placeholder={{
                                        color: darkMode ? 'palette.accent' : 'palette.tertiary',  
                                        fontSize: '1rem'
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
                                onClick={sendEmail}
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
