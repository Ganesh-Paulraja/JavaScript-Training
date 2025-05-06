import React from 'react'
import { consumeThem } from './ThemeContaxt'



function BigChild() {
  const theme = consumeThem()
  return (
    <div>
      <h2>Current Theme is {theme.theme}</h2>
      <button onClick={theme.toggleTheme}>Click</button>
    </div>
  )
}

export default BigChild
