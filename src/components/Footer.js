import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import { container, item } from '../miscellaneous/motionVariants'

export const Footer = () => {

    // LINKS TO BE MAPPED
    const socialLinks = [
        { label: 'Github', link: 'https://github.com/DarrenJay95', logo: <AiFillGithub/> },
        { label: 'Linkedin', link: 'https://www.linkedin.com/in/darren-jay-m-5b89431ba', logo: <AiFillLinkedin/> },
        { label: 'Instagram', link: 'https://www.instagram.com/darrenjay_95', logo: <AiFillInstagram/> },
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
                as={motion.div}
                variants={container}
                whileInView='show'
                initial='hidden'
                viewport={{ once: true }}
            >
                { socialLinks.map((social, index) => {
                    return(
                        <Tooltip
                            hasArrow
                            label={social.label}
                            bg='palette.tertiary'
                            color='palette.primary'
                            opacity='.5'                        
                        >
                            <Box 
                                key={index}
                                fontSize='1.5rem'
                                as={motion.a}
                                variants={item}
                                href={social.link}
                                target='_blank'
                            >
                                { social.logo }
                            </Box>
                        </Tooltip>
                    )
                }) }
            </Flex>
        </Flex>
    )
}
