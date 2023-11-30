'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1 0 auto;
`

export const Inner = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 56px 14.5px;
  max-width: 100%;
  width: 100%;

  @media ${({ theme }) => theme.devices.mobileLgUp} {
    padding: 50px 20px;
  }

  @media ${({ theme }) => theme.devices.noteUp} {
    max-width: 1440px;
    padding: 100px 108px 50px 108px;
  }
`
