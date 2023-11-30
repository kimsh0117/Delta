import { atom, selector } from 'recoil'
import pipe from '@/utils/pipe'
import add from '@/utils/add'
import map from '@/utils/map'
import join from '@/utils/join'
import curry from '@/utils/curry'

export const selectedPlatformState = atom({
  key: 'selectedPlatformState',
  default: [],
})

export const plstformsOptions = atom({
  key: 'platformsOptions',
  default: [],
})

export const platformQuery = selector({
  key: 'platformQuery',
  get: ({ get }) => {
    const _map = curry(map)
    const _join = curry(join)

    const parsed = pipe(
      get(selectedPlatformState),
      _map(options => options.value),
      _join(','),
    )
    const params = parsed ? pipe(parsed, add('&platforms=')) : ''
    return params
  },
})
