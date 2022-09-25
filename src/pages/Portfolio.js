import { Box, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';


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

    return (
        <Box
            id='portfolio'
            w='100%'
            ref={ref}
            pos='relative'
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
                <Text
                    textAlign='center'
                    fontSize='1.5rem'
                    marginTop='8rem'
                >
                    Portfolio
                </Text>
                <Wrap
                    justify='center'
                    align='center'
                    spacing='2rem'
                    p='1.5rem'
                >
                    {projectList.map((project, index) => {
                        return(
                        <WrapItem>
                            <Flex
                                w='25rem'
                                h='20rem'
                                bg='#323D50'
                                borderRadius='.5rem'
                                boxShadow='2px 3px 20px rgba(0, 0, 0, .2)'
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
