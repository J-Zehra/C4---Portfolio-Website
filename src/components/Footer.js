import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

export const Footer = () => {

    // LINKS TO BE MAPPED
    const socialLinks = [
        { label: 'Facebook', logo: <FaFacebook/> },
        { label: 'Twitter', logo: <AiFillTwitterCircle/> },
        { label: 'Instagram', logo: <AiFillInstagram/> },
    ]

    return (
        <Flex
            w='100%'
            paddingBlock='5rem'
            alignItems='center'
            justifyContent='center'
            flexDir='column'
            gap='1rem'
        >   
            <Text>
                Follow my socials
            </Text>

            <Flex
                gap='2rem'
            >
                { socialLinks.map((social, index) => {
                    return(
                        <Box 
                            key={index}
                            fontSize='1.5rem'
                        >
                            { social.logo }
                        </Box>
                    )
                }) }
            </Flex>
        </Flex>
    )
}
