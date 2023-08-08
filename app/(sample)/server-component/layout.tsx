import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Server Component',
  description: 'The server component page for sample'
}
const ServerComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default ServerComponentLayout
