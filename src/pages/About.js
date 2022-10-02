import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

import BG from '../assets/aboutBg.png'
import BG2 from '../assets/aboutBg2.png'
import ProfilePicture from '../assets/aboutImage.png'
import ProfilePicture2 from '../assets/aboutImage2.png'
import { CustomButton } from '../components/CustomButton';
import { BiDownload } from 'react-icons/bi'

import { container, item } from '../miscellaneous/motionVariants'
import { useFetchContents } from '../miscellaneous/useFetchContents';

export const About = () => {

    // GET THE STATES FROM THE CONTEXT
    const { setActiveNav, darkMode } = useContext(ApplicationContext)
    const [ data ] = useFetchContents("about")

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    // SET THE ACTIVE NAV TO BE THE INDEX 0 WHEN THIS COMPONENT IS VISIBLE ON THE SCREEN
    useEffect(() => {
        if (isInView) {
            setActiveNav(1);
        }
    }, [isInView, setActiveNav])

    return (
        <Box
            marginTop='-8rem'
            id='about'
            w='100%'
            ref={ref}
        >
            <Flex
                justifyContent='center'
                flexDir='column'
                gap='5rem'
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
                    bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                    backgroundClip='text'
                >
                    <Text
                        textAlign='center'
                        fontSize='2.5rem'
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
                    flexDir={{
                        base: 'column',
                        lg: 'row'
                    }}
                    gap='10rem'

                    as={motion.div}
                    variants={container}
                    whileInView='show'
                    initial='hidden'
                    viewport={{ once: true }}
                >
                    <Flex
                        flex='1'
                        justifyContent='center'
                        alignItems='center'
                        w='90%'
                    >
                        {/* PROFILE PICTURE */}
                        <Image
                            src={darkMode ? ProfilePicture2 : ProfilePicture}

                            as={motion.img}
                            variants={item}
                        />
                    </Flex>
                    <Flex
                        justifyContent='center'
                        alignItems={{
                            base: 'center',
                            lg: 'start'
                        }}
                        flex='1'
                        flexDir='column'
                        pos='relative'
                    >
                        <Image
                            src={darkMode ? BG2 : BG}
                            pos='absolute'
                            zIndex='-1'
                            display={{
                                base: 'none',
                                lg: 'block'
                            }}
                            left={{
                                base:'0',
                                lg:'-3.5rem'
                            }}

                            as={motion.img}
                            variants={item}
                        />
                        <Text
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            fontSize='1rem'
                            as={motion.p}
                            variants={item}
                        >
                            My name is,
                        </Text>
                        <Text
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'

                            textAlign={{
                                base: 'center',
                                lg: 'start'
                            }}
                            fontSize='2rem'
                            as={motion.h1}
                            variants={item}
                        >
                            { data[0]?.name}
                        </Text>
                        <Text
                            w={{
                                base: '90%',
                                lg: '60%'
                            }}
                            bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                            backgroundClip='text'
                            textAlign={{
                                base: 'center',
                                lg: 'start'
                            }}

                            fontSize='1rem'
                            as={motion.p}
                            variants={item}
                        >
                            { data[0]?.description }
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
