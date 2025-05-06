import React, { useContext } from 'react'
import { themeContaxt } from './Contaxt'
import GrandChild from './GrandChild'

export default function Child() {
  const theme = useContext(themeContaxt)
  console.log(theme)

  return (
    <div>
      Child Component {theme.theme}
      <GrandChild/>
    </div>
  )
}
