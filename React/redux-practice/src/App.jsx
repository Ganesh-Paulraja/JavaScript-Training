import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './redux/userSlice'

function App() {
  const user = useSelector(state => state.usertwo)
  const dispatch = useDispatch()

  const getData = async() => {
    try {
      const data = await fetch('https://dummyjson.com/posts/')
      console.log(data.data)

    }catch(error) {
      console.log(error)
    }
  }
  getData()

  return (
    <>
     <h1>Redux Practice {user.theme}</h1>
     <button onClick={() => user.theme === 'Dark' ? dispatch(changeName('Light')) : dispatch(changeName('Dark'))}>Click</button>
    </>
  )
}

export default App
