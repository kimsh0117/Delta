import styled from 'styled-components'
import { Inner } from '@/features/ui/Layout/styled'

export const Container = styled(Inner)`
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SelectContaeinr = styled.div`
  display: flex;
  gap: 5px;
`

export const Title = styled.h2`
  ${({ theme }) => theme.mixins.H4}

  @media ${({ theme }) => theme.devices.noteUp} {
    ${({ theme }) => theme.mixins.H2}
  }
`

export const GameCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 18px;
  margin-top: 20px;

  @media ${({ theme }) => theme.devices.mobileLgUp} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 14px;
  }
  @media ${({ theme }) => theme.devices.noteUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const BottomIntersection = styled.div`
  margin-top: 50px;
  padding: 10px;
`
