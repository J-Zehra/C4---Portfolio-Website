import React from 'react'

import { createContext } from 'react'

export const ApplicationContext = createContext();

export const AppContext = ({ children }) => {
    return (
        <ApplicationContext.Provider>
            { children }
        </ApplicationContext.Provider>
    )
}
