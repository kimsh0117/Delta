import { useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
/**
 * hooks
 */
import useDebounce from '@/hooks/useDebounce'
/**
 * global state
 */
import { searchState } from '@/features/games/store'

export default function useSearch() {
  const [search, setSearch] = useState('')
  const debouncedId = useDebounce(search, 700)
  const [, setUsers] = useRecoilState(searchState)

  // change event from input
  const handleChange = useCallback(e => {
    const search = e.target.value
    setSearch(search)
  }, [])

  useEffect(() => {
    setUsers(debouncedId)
  }, [debouncedId])

  return {
    handleChange,
  }
}
