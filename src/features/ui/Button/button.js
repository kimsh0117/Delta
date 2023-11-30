import * as Styled from './styled'

const Button = ({ tag = 'button', children, classes, onClick, ...rest }) => {
  return (
    <Styled.Button as={tag} className={classes} onClick={onClick} {...rest}>
      {children}
    </Styled.Button>
  )
}

export default Button
