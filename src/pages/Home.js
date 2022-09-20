import { Flex } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import React, { useContext, useEffect, useRef } from 'react'
import { Gradient } from '../assets/svg_component/Gradient'
import { ApplicationContext } from '../context/AppContext'

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
            w='100%'
            justifyContent='center'
            alignItems='center'
            fontWeight='bold'
            ref={ref}
        >
            <Gradient/>
        </Flex>
    )
}
