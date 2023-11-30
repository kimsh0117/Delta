'use client'

import * as Styled from './styled'
import Input from '@/features/ui/Input'
import useSearch from '@/features/games/useSearch'

const Header = () => {
  const { handleChange } = useSearch()
  return (
    <Styled.Container>
      <Input id='search' placeholder='please enter' onChange={handleChange} />
    </Styled.Container>
  )
}

export default Header
