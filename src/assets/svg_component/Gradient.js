import { Box } from '@chakra-ui/react'
import React from 'react'

export const Gradient = () => {
    return (
        <Box
            pos='absolute'
            top='0'
            bottom='0'
            left='0'
            right='0'
            w='100vw'
        >
            <svg height="1023" viewBox="0 0 1920 1023">
                <path d="M0 0H1920V965.989C1780.18 1110.79 703.637 934.083 0 934.083V0Z" fill="url(#paint0_linear_66_38)" />
                <defs>
                    <linearGradient id="paint0_linear_66_38" x1="379.843" y1="695.63" x2="2126.82" y2="-292.061" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#293241" />
                        <stop offset="1" stop-color="#030913" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </Box>
    )
}
