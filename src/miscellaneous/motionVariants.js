export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

export const item = {
    hidden: { opacity: 0, y: -10 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: 'tween',
            duration: .6
        }
    }
}
