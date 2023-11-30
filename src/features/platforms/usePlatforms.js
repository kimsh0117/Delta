'use client'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { usePlatformsQuery } from './queries'
import {
  selectedPlatformState,
  plstformsOptions,
} from '@/features/platforms/store'

const usePlatforms = () => {
  const { data } = usePlatformsQuery.useGetPlatforms()
  const [selected, setSelected] = useRecoilState(selectedPlatformState)
  const [options, setOptions] = useRecoilState(plstformsOptions)

  useEffect(() => {
    if (data) {
      setOptions(() =>
        data?.results.map(platform => ({
          value: platform.id,
          label: platform.name,
        })),
      )
    }
  }, [data, setOptions])
  return {
    options,
    selected,
    setSelected,
  }
}

export default usePlatforms
