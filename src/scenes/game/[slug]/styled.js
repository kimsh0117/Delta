import { Swiper } from 'swiper/react'
import styled from 'styled-components'
import { Inner as Inn } from '@/features/ui/Layout'
import theme from '@/styles/themes/theme'
import { Button } from '@/features/ui/Button/styled'

export const Container = styled(Inn)`
  box-sizing: border-box;
`

export const Subtitle = styled.p`
  margin-top: 4px;
  margin-bottom: 30px;
  ${theme.mixins.text3}
  @media ${theme.devices.mobileLgUp} {
    margin-top: 5px;
    ${theme.mixins.text4}
  }

  @media ${theme.devices.noteUp} {
    ${theme.mixins.text1}
    margin-top: 6px;
  }
`

export const Title = styled.h2`
  ${theme.mixins.H4}

  @media ${theme.devices.noteUp} {
    ${theme.mixins.H2}
  }
`

export const ScreenshotsContainer = styled(Swiper)``

export const Screenshot = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: -3px 2px 23px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

export const Control = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  @media ${theme.devices.mobileLgUp} {
    justify-content: start;
  }
`

export const ReverseButton = styled(Button)`
  transform: rotate(180deg);
`

export const BulletContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
`

export const Bullet = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ $isactive }) =>
    $isactive ? theme.colors.primary : '#191919'};
  opacity: ${({ $isactive }) => ($isactive ? 1 : 0.2)};
  border-radius: 50px;
  margin: 0 4px;
`
