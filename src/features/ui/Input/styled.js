import styled from 'styled-components'
import theme from '@/styles/themes/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
`

export const Input = styled.input`
  border-radius: 8px;
  border: 1.5px solid ${theme.colors.grey};
  background: white;
  height: 46px;
  padding: 16px;

  color: ${theme.colors.grey};
  font-size: 14px;
  font-weight: 400;

  margin-top: 22px;
  margin-bottom: 22px;

  &:focus,
  &:active {
    border: 1px solid ${theme.colors.black};
  }
`
