import { Box, Flex, Text, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { CustomModal } from '../components/CustomModal';
import { ApplicationContext } from '../context/AppContext';

import { container, item } from '../miscellaneous/motionVariants'

export const Portfolio = () => {

    // GET THE STATES FROM THE CONTEXT
    const { setActiveNav, darkMode } = useContext(ApplicationContext)

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    // SET THE ACTIVE NAV TO BE THE INDEX 0 WHEN THIS COMPONENT IS VISIBLE ON THE SCREEN
    useEffect(() => {
        if (isInView) {
            setActiveNav(2);
        }
    }, [isInView, setActiveNav])

    // DUMMY PROJECTS TO BE MAPPED
    const projectList = [
        { title: 'Project 1' },
        { title: 'Project 2' },
        { title: 'Project 3' },
        { title: 'Project 4' },
        { title: 'Project 5' },
        { title: 'Project 6' },
    ]

    // CONTROLLER FOR THE MODAL
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            id='portfolio'
            w='100%'
            ref={ref}
            pos='relative'
        >
            <CustomModal
                onClose={onClose}
                isOpen={isOpen}
            />
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
                    marginTop='10rem'
                    bg={darkMode ? 'palette.primary' : 'linear-gradient(#E0FBFC ,#A0B6D2)'}
                    backgroundClip='text'
                >
                    <Text
                        textAlign='center'
                        fontSize='2.5rem'
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
                    viewport={{ once: true }}
                >
                    {projectList.map((project, index) => {
                        return(
                        <WrapItem
                            key={index}
                        >
                            <Flex
                                w='20rem'
                                h='18rem'
                                bg={darkMode ? '#C7DBEE' : '#323D50'}
                                borderRadius='.5rem'
                                boxShadow='2px 3px 20px rgba(0, 0, 0, .1)'
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
