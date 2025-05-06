import React, { useContext } from 'react'
import { themeContaxt } from './Contaxt'

export default function GrandChild() {
  const toggleTheme = useContext(themeContaxt)
  return (
    <div>
      <button onClick={toggleTheme.toggleTheme}>Click</button>
    </div>
  )
}
