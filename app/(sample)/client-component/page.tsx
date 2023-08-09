'use client'

import { useEffect, useState } from 'react'

const ClientComponent = () => {
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    ;(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      setTitle('Client')
    })()
  }, [title])

  return (
    <div className="min-h-screen">
      <h1 className="mt-12 text-center text-6xl font-bold">{title} Component Page</h1>
    </div>
  )
}

export default ClientComponent
