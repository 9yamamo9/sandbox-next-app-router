'use client'

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="text-center m-16 min-h-screen">
      <div className="text-3xl">You clicked {count} times</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-1.5 mt-2"
      >
        Click me
      </button>
    </div>
  )
}

export default Counter
