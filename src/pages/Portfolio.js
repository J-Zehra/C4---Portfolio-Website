import { Box, Flex, Text, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { Modal } from '../components/Modal';
import { ApplicationContext } from '../context/AppContext';

import { container, item } from '../miscellaneous/motionVariants'

export const Portfolio = () => {

    const { setActiveNav } = useContext(ApplicationContext)

    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    useEffect(() => {
        if (isInView) {
            setActiveNav(2);
        }
    }, [isInView, setActiveNav])

    const projectList = [
        { title: 'Project 1' },
        { title: 'Project 2' },
        { title: 'Project 3' },
        { title: 'Project 4' },
        { title: 'Project 5' },
        { title: 'Project 6' },
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            id='portfolio'
            w='100%'
            ref={ref}
            pos='relative'
        >
            <Modal
                onClose={onClose}
                isOpen={isOpen}
            />
            <Flex
                justifyContent='center'
                flexDir='column'
                gap='12rem'
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
                    marginTop='16rem'
                    bg='linear-gradient(#E0FBFC ,#A0B6D2)'
                    backgroundClip='text'
                >
                    <Text
                        textAlign='center'
                        fontSize='1.5rem'
                        fontWeight='bold'
                    >
                        Portfolio
                    </Text>
        
                    <Text
                        textAlign='center'
                        fontSize='1rem'
                        fontWeight='normal'
                    >
                        Take a look at some of my best work
                    </Text>
                </Box>
                <Wrap
                    justify='center'
                    align='center'
                    spacing='2rem'
                    p='1.5rem'

                    as={motion.div}
                    variants={container}
                    whileInView='show'
                    initial='hidden'
                >
                    {projectList.map((project, index) => {
                        return(
                        <WrapItem
                            key={index}
                        >
                            <Flex
                                w='20rem'
                                h='18rem'
                                bg='#323D50'
                                borderRadius='.5rem'
                                boxShadow='2px 3px 20px rgba(0, 0, 0, .2)'
                                cursor='pointer'
                                onClick={onOpen}

                                as={motion.div}
                                variants={item}
                                whileHover={{
                                    scale: 1.01
                                }}
                            >

                            </Flex>
                        </WrapItem>
                        )
                    })}
                </Wrap>
                {/* <PortfolioCTA/> */}
            </Flex>
        </Box>
    )
}
