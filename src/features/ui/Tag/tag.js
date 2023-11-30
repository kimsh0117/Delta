import PropTypes from 'prop-types'
import * as Styled from './styled'

const Tag = ({ label = '' }) => {
  return <Styled.Wrapper>{label}</Styled.Wrapper>
}

Tag.propTypes = {
  label: PropTypes.string,
}

export default Tag
