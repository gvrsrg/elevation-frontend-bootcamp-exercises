import React, { useEffect, useState } from 'react'

export default function Exercise1() {
    let now = new Date().toLocaleTimeString();
    const [timeToShow, setTimeToShow] = useState(now)

    const updateTitle = () => {
        let now = new Date().toLocaleTimeString();
        setTimeToShow(now);
      }

    useEffect(() => {
        setTimeout(updateTitle, 1000)
      })


  return (
    <div>{timeToShow}</div>
  )
}
