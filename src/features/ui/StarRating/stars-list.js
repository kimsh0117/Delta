import React, { useContext } from 'react'

import Star from './star'

import { StarRatingContext } from './star-rating'

import * as Styled from './styled'

const StarsList = () => {
  const { maxValue } = useContext(StarRatingContext)

  return (
    <Styled.Rating>
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1

        return <Star key={index} value={value} />
      })}
    </Styled.Rating>
  )
}

export default StarsList
