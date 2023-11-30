'use client'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'
import theme from '@/styles/themes/theme'

export const Container = styled(Link)`
  background: linear-gradient(112.58deg, #f7eb9e 10.11%, #b3edff 96.08%);
  ${theme.mixins.H5};
  box-shadow: 1px 3px 27px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const Header = styled.div`
  position: relative;
`

export const Thumbnail = styled(Image)`
  opacity: 0.6;
`

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 13px 8px 13px;
  height: 117px;

  @media ${theme.devices.mobileLgUp} {
    padding: 18px 15px 13px 15px;
    height: 87px;
  }

  @media ${theme.devices.noteUp} {
    padding: 30px 24px 12px 24px;
    height: 160px;
  }
`

export const HeaderBottom = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 2;
`

export const Subtitle = styled.p`
  color: ${theme.colors.black};
  ${theme.mixins.text5};
  margin-bottom: 5px;
  z-index: 2;
  @media ${theme.devices.mobileLgUp} {
    font-weight: 400;
    font-size: 8px;
    line-height: 140%;
  }
  @media ${theme.devices.noteUp} {
    ${theme.mixins.text3};
  }
`

export const Title = styled.h4`
  ${theme.mixins.H6};
  color: ${theme.colors.black};
  max-width: 152px;
  z-index: 2;

  @media ${theme.devices.mobileLgUp} {
    max-width: 205px;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
  }
  @media ${theme.devices.noteUp} {
    ${theme.mixins.H4}
  }
`

export const Bottom = styled.div`
  background: #fff;
  padding: 13px 13px 5px 13px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: auto;
  @media ${theme.devices.mobileLgUp} {
    padding: 6px 15px 12px 15px;
  }
  @media ${theme.devices.noteUp} {
    padding: 9px 24px;
    ${theme.mixins.text3};
  }
`
