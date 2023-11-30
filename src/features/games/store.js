import { atom, selector } from 'recoil'
import pipe from '@/utils/pipe'
import add from '@/utils/add'
import map from '@/utils/map'
import join from '@/utils/join'
import curry from '@/utils/curry'

export const ordersState = atom({
  key: 'ordersStage',
  default: [
    { value: 'rating', label: 'Rating' },
    { value: 'released', label: 'Released' },
  ],
})

export const selectedOrderState = atom({
  key: 'selectedOrderState',
  default: [],
})

export const orderingQuery = selector({
  key: 'orderingQuery',
  get: ({ get }) => {
    const _map = curry(map)
    const _join = curry(join)

    const parsed = pipe(
      get(selectedOrderState),
      _map(options => options.value),
      _join(','),
    )
    const params = parsed ? pipe(parsed, add('&ordering=')) : ''
    return params
  },
})

export const searchState = atom({
  key: 'searchState',
  default: '',
})

export const searchQuery = selector({
  key: 'searchQuery',
  get: ({ get }) => {
    const searched = get(searchState)
    const params = searched ? pipe(searched, add('&search=')) : ''
    return params
  },
})
