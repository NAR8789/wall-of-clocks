import { useState, useEffect } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const h = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(h)
  })

  return (
    <div>{date.toString()}</div>
  )
}
