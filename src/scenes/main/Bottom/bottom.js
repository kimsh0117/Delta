'use client'
import { useRef } from 'react'
import * as Styled from './styled'
// hooks
import useGames from '@/features/games/useGames'
import { useObserver } from '@/hooks/useObserver'

const Bottom = () => {
  const { fetchNextPage } = useGames()
  const bottom = useRef(null)

  const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage()
  useObserver({ target: bottom, onIntersect, threshold: 0.1 })
  return <Styled.Bottom ref={bottom} />
}

export default Bottom
