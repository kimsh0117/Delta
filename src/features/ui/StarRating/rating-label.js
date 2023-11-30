import React, { useContext } from 'react'

import { StarRatingContext } from './star-rating'

const StarRatingLabel = () => {
  const { rating, labelText } = useContext(StarRatingContext)

  return labelText ? <div>{labelText(rating)}</div> : null
}

export default StarRatingLabel
