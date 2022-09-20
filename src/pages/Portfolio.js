import { Box } from '@chakra-ui/react'
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

    return (
        <Box
            id='portfolio'
            w='100%'
            h='100vh'
            ref={ref}
        >

        </Box>
    )
}
