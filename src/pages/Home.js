import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import React, { useContext, useEffect, useRef } from 'react'
import { Gradient } from '../assets/svg_component/Gradient'
import { ApplicationContext } from '../context/AppContext'

import HeroImage from '../assets/heroImage.png'
import { CTA } from '../components/CTA'
import { container, item } from '../miscellaneous/motionVariants'


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

                as={motion.div}
                variants={container}
                initial='hidden'
                whileInView='show'
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
                        as={motion.p}
                        variants={item}
                    >
                        Hi, I am Darren,
                    </Text>
                    <Text
                        bg='linear-gradient(#E0FBFC ,#8BA8CD)'
                        backgroundClip='text'
                        as={motion.h1}
                        variants={item}
                    >
                        Software Engineer.
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

                    {/* CTA */}
                    <CTA 
                        variants={item}
                    />
                </Flex>
                <Box
                    flex='1'
                    as={motion.div}
                    variants={item}
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
