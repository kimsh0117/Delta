import React from 'react'

import * as Styled from './styled'

const Input = React.forwardRef(
  (
    {
      label = '',
      errorMessage = '',
      disabled = false,
      name,
      type = 'text',
      placeholder,
      id,
      ...rest
    },
    ref,
  ) => {
    return (
      <Styled.Container>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
        <Styled.Input
          disabled={disabled}
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          id={id}
        />
        {errorMessage && <Styled.Label>{errorMessage}</Styled.Label>}
      </Styled.Container>
    )
  },
)

Input.displayName = 'Input'
export default React.memo(Input)
