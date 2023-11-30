'use client'
import styled from 'styled-components'
import theme from '@/styles/themes/theme'

export const Wrapper = styled.div`
  border-radius: 100px;
  text-align: center;
  display: flex;
  width: fit-content;
  align-items: center;

  color: #ffffff;
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 15px;
  background-color: ${theme.colors.primary};
  padding: 5px 7px;
`
