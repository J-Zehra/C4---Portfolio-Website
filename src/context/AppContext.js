import React, { useEffect, useState } from 'react'

import { createContext } from 'react'

export const ApplicationContext = createContext();

export const AppContext = ({ children }) => {

    // INITIALIZE A STATE TO TRACK IF THE PAGE IS SCROLLED
    const [scrolled, setScrolled] = useState(false);

    // HANDLE THE SCROLL EVENT. CHANGE VARIABLES WHEN SCROLLED
    const handleScroll = () => {
        if (window.scrollY >= 60) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    // ATTACH THE FUNCTION TO THE SCROLL EVENT LISTENER ON MOUNT
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const values = {
        scrolled
    }

    return (
        <ApplicationContext.Provider value={values}>
            {children}
        </ApplicationContext.Provider>
    )
}
