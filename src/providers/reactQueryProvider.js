'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers = ({ children }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Providers
