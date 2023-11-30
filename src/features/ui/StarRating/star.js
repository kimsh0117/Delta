import React, { useContext } from 'react'

import { StarRatingContext } from './star-rating'

import * as Styled from './styled'

const Star = ({ value }) => {
  const {
    emptyColor,
    fillColor,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width,
  } = useContext(StarRatingContext)

  return (
    <Styled.Star
      data-rating={value}
      onClick={() => setRating(value)}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        height={height}
        viewBox='0 0 25 25'
        width={width}
      >
        <polygon
          strokeWidth='0'
          points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
        />
      </svg>
    </Styled.Star>
  )
}

export default Star
