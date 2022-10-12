
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
            overflowX: 'hidden', 
        },
        body: {
            bg: 'palette.primary',
            color: 'palette.tertiary',
        },
        _placeholder: {
            color: 'rgba(38, 50, 56, .6)',
            fontSize: '.9rem'
        },
        h1: {
            fontSize: {
                base: '3rem',
                md: '4.5rem'
            },
            fontWeight: 'bold'
        },
        p: {
            fontSize: {
                base: '.85rem',
                md: '1rem'
            },
            fontWeight: 'medium'
        }
    }
}

const styles2 = {
    global: {
        html: {
            scrollBehavior: 'smooth',
            overflowX: 'hidden', 
        },
        body: {
            bg: 'palette.tertiary',
            color: 'palette.primary',
        },
        _placeholder: {
            color: 'rgba(38, 50, 56, .6)',
            fontSize: '.9rem'
        },
        h1: {
            fontSize: {
                base: '3rem',
                md: '4.5rem'
            },
            fontWeight: 'bold'
        },
        p: {
            fontSize: {
                base: '.9rem',
                md: '1rem'
            },
            fontWeight: 'medium'
        }
    }
}

export const theme = extendTheme({ colors, fonts, styles });
export const darkTheme = extendTheme({ colors, fonts, styles: styles2 });