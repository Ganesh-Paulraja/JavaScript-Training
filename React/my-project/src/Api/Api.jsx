import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api() {
  const [userData, setUserData] = useState(null)
    const dataOne = {
    "id": 2,
    "title": "He was an expert but not in a discipline",
    "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    "tags": [
        "french",
        "fiction",
        "english"
    ],
    "reactions": {
        "likes": 859,
        "dislikes": 32
    },
    "views": 4884,
    "userId": 91
}

//   fetch --https://dummyjson.com/posts/ --/add , /update, /delete
  const getData = () => {
    fetch('https://dummyjson.com/posts/')
    .then(res => res.json())
    .then(data => {
        setUserData(data)
        console.log(data.posts)
    })
    .catch(error => console.log(error))
  }

  const postData = () => {
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataOne)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
  }

  const putData = () => {
    fetch('https://dummyjson.com/posts/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataOne)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => () => console.log(error))
  }
  
  const deleteData = () => {
    fetch('https://dummyjson.com/posts/2', {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const getAsync = async() => {
    try {
        const response = await fetch('https://dummyjson.com/posts')
        const res = await response.json()
        setUserData(res)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  }

  const postAsync = async() => {
    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(dataOne)
      })
      const res = await response.json()
      console.log(res)
    } catch {
        console.log(error)
    }
  }

  const putAsync = async() => {
    try {
      const response = await fetch('https://dummyjson.com/posts/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataOne)
      })
      if (!response.ok) {
        console.log(response.status)
        return
      }
      const res = await response.json()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  
  const deleteAsync = async() => {
    try {
      const response = await fetch('https://dummyjson.com/posts/123', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json()
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  const axiosNormal = () => {
    const response = axios.get('https://dummyjson.com/posts/')
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }

  const getAxios = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/posts/')
      console.log(response.data)
      setUserData(response.data)
    } catch(error) {
      console.log(error);
      
    }
  }

  const postAxios = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/posts/add', dataOne)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAxios = async () => {
    try {
      const response = await axios.delete('https://dummyjson')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // getData()
    // postData()
    // putData()
    // deleteData()
    // getAsync()
    // postAsync()
    // putAsync()
    // deleteAsync()
    // getAxios()
    // axiosNormal()
    postAxios()
  }, [])
  

  return (
    <div>
      <h1>API PRACTICE</h1>
    </div>
  )
}
