'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/themes/theme'

const Providers = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
