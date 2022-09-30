import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext'
import HeroImage from '../assets/heroImage.png'
import { CTA } from '../components/CTA'
import { container, item } from '../miscellaneous/motionVariants'
import { useFetchContents } from '../miscellaneous/useFetchContents'
import Logo1 from '../assets/UniLogo1.svg'
import Logo2 from '../assets/UniLogo2.png'

export const Home = () => {

    // GET THE STATES FROM THE CONTEXT
    const { setActiveNav, darkMode } = useContext(ApplicationContext)
    const [data] = useFetchContents("home");

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    // SET THE ACTIVE NAV TO BE THE INDEX 0 WHEN THIS COMPONENT IS VISIBLE ON THE SCREEN
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

            {/* HERO CONTENT */}
            <Flex
                w='100%'
                justifyContent='space-between'
                alignItems='center'
                zIndex='1'

                as={motion.div}
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >
                <Flex
                    flexDir='column'
                    justifyContent='center'
                    alignItems={{
                        base: 'center',
                        lg: 'flex-start'
                    }}
                    flex='1'
                >
                    {/* TEXTS */}
                    <Text
                        bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                        backgroundClip='text'
                        textAlign={{
                            base: 'center',
                            lg: 'start'
                        }}
                        as={motion.p}
                        variants={item}
                    >
                        {`Hi, I am ${data[0]?.name}`},
                    </Text>
                    <Text
                        bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                        backgroundClip='text'
                        textAlign={{
                            base: 'center',
                            lg: 'start'
                        }}
                        as={motion.h1}
                        variants={item}
                    >
                        {`${data[0]?.profession}.`}
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
                        as={motion.p}
                        variants={item}
                    >
                        {`${data[0]?.description}`}
                    </Text>

                    {/* CTA */}
                    <CTA
                        variants={item}
                    />
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        gap='2rem'
                        marginTop='5rem'
                    >
                        <Image 
                            src={Logo1} 
                            w='12rem'
                            filter='grayscale(90%)'
                            opacity='.3'
                        />
                        <Image 
                            src={Logo2} 
                            w='12rem'
                            filter='grayscale(90%)'
                            opacity='.3'
                        />
                    </Flex>
                </Flex>
                <Box
                    flex='1'
                    as={motion.div}
                    variants={item}
                    display={{
                        base: 'none',
                        lg: 'block'
                    }}
                    whileHover={{
                        scale: 1.02,
                        transition: {
                            duration: .6
                        }
                    }}
                >
                    <Image
                        src={HeroImage}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}
