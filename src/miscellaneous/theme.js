
import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        primary: '#293241',
        secondary: '#252D3C',
        tertiary: '#E0FBFC',
        accent: '#3D5A80'
    }
}


const fonts = {
    body: `'Poppins', sans-serif`
}

const styles = {
    global: {
        html: {
            scrollBehavior: 'smooth',
            overflowX: 'hidden'
        },
        body: {
            bg: 'palette.primary',
            color: 'palette.tertiary',
        },
        _placeholder: {
            color: 'rgba(38, 50, 56, .6)',
            fontSize: '.9rem'
        },
    }
}

export const theme = extendTheme({ colors, fonts, styles });