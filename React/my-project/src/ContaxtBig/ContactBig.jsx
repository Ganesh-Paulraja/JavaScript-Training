import React, { useState } from 'react'
import BigChild from './BigChild'
import { ThemeProvider } from './ThemeContaxt'

export default function ContactBig() {
  const[theme, setTheme] = useState('Light')

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <div>
    <ThemeProvider.Provider value={{theme, toggleTheme}}>
      <BigChild/>
    </ThemeProvider.Provider>
    </div>
  )
}
