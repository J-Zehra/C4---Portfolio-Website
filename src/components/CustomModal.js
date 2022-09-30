import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ApplicationContext } from '../context/AppContext'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript } from 'react-icons/di'

export const CustomModal = ({ isOpen, onClose }) => {

    // GET THE STATES FROM THE CONTEXT
    const { darkMode } = useContext(ApplicationContext)

    // ICONS TO BE MAPPED
    const techUsed = [
        {  icon: <AiFillHtml5/> },
        {  icon: <DiCss3/> },
        {  icon: <DiJavascript/> },
    ]

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            closeOnOverlayClick
        >
            <ModalOverlay />
            <ModalContent
                bg={darkMode ? '#BBD2E8' : 'palette.primary' }
                color={darkMode ? 'palette.primary' : 'palette.tertiary'}
            >
                <ModalHeader>Description here</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Sample</Text>
                </ModalBody>

                <ModalFooter
                    display='flex'
                    gap='1rem'
                >
                    { techUsed.map((tech, index) => {
                        return(
                            <Box
                                key={index}
                                fontSize='1.3rem'
                            >
                                { tech.icon }
                            </Box>
                        )
                    }) }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
