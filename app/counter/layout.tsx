import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Counter',
  description: 'The counter page for sample'
}
const CounterLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default CounterLayout
