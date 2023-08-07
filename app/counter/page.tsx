'use client'

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
    </>
  )
}

export default Counter
