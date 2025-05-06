import React, {createContext, useContext} from 'react'

export const ThemeProvider = createContext({})
// use context only called inside a compnent or hook
export const consumeThem = () => useContext(ThemeProvider)
