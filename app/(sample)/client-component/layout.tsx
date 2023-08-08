import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Component',
  description: 'The client component page for sample'
}
const ClientComponentLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default ClientComponentLayout
