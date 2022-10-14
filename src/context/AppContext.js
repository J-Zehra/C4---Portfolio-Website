import React, { useEffect, useState } from 'react'

import { createContext } from 'react'

export const ApplicationContext = createContext();

export const AppContext = ({ children }) => {

    const [activeNav, setActiveNav] = useState(0)
    const [toggled, setToggled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

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

    // SET THE VALUES
    const values = {
        scrolled,
        activeNav,
        setActiveNav,
        toggled, 
        setToggled,
        darkMode, 
        setDarkMode
    }

    return (
        <ApplicationContext.Provider value={values}>
            {children}
        </ApplicationContext.Provider>
    )
}
