import React, { useState } from 'react'
import Child from './child'

export const themeContaxt = React.createContext()

export default function Contaxt() {
  const [theme, setTheme] = useState("Light")

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : "Light")
  }

  return (
    <div>
      <themeContaxt.Provider value={{theme, toggleTheme}}>
      <Child/>
      </themeContaxt.Provider>
    </div>
  )
}
