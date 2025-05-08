import React, { useEffect, useState } from 'react'

export default function AsyncDataFetch() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) throw new Error('Something went wrong!')
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // 👈 empty dependency array = run once on mount

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}
