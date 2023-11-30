'use client'
import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

import StarRatingLabel from './rating-label'
import StarsList from './stars-list'

export const StarRatingContext = createContext()

const StarRating = ({
  defaultState = 0,
  emptyColor = 'grey',
  fillColor = '#edaa10',
  height = 53,
  labelText = '',
  maxValue = 5,
  onChangeHover = () => {},
  onChangeValue = () => {},
  readOnly = false,
  width = 53,
}) => {
  const [rating, setRating] = useState(defaultState)
  const [hover, setHover] = useState(null)

  const setRatingFn = e => {
    if (readOnly) return

    const value = e.currentTarget.dataset.star

    setRating(value)
    onChangeValue(value)
  }

  const setHoverFn = e => {
    if (readOnly) return

    const value = e.type === 'mouseleave' ? null : e.currentTarget.dataset.star

    setHover(value)
    onChangeHover(value)
  }

  return (
    <>
      <StarRatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          height,
          hover,
          labelText,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
        }}
      >
        <>
          <StarRatingLabel />
          <StarsList />
        </>
      </StarRatingContext.Provider>
    </>
  )
}

export default StarRating

StarRating.propTypes = {
  defaultState: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelText: PropTypes.string,
  maxValue: PropTypes.number,
  onChangeHover: PropTypes.func,
  onChangeValue: PropTypes.func,
  readOnly: PropTypes.bool,
  width: PropTypes.number,
}
