import * as Styled from './styled'

const Layout = ({ children }) => {
  return (
    <Styled.Container as='header'>
      <Styled.Main>{children}</Styled.Main>
    </Styled.Container>
  )
}

export default Layout
