import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { gamesApi } from '@/features/games/api'
import pipe from '@/utils/pipe'
import { getSearchParamsWithCurry } from '@/utils/getPageValue'
import { platformQuery } from '@/features/platforms/store'
import { orderingQuery, searchQuery } from './store'

export const useGamesQuery = {
  useGetGames: () => {
    const [platformParam] = useRecoilState(platformQuery)
    const [orderingParam] = useRecoilState(orderingQuery)
    const [searchParam] = useRecoilState(searchQuery)

    return useInfiniteQuery({
      staleTime: 1000,
      queryKey: ['getGames', platformParam, orderingParam, searchParam],
      queryFn: ({ pageParam = 1 }) =>
        gamesApi.getGames({
          pageParam,
          platformParam,
          orderingParam,
          searchParam,
        }),
      getNextPageParam: lastPage => {
        if (lastPage.next) {
          return pipe(lastPage.next, getSearchParamsWithCurry('page'), parseInt)
        }
        return undefined
      },
    })
  },
  useGetGameDetail: ({ slug }) => {
    return useQuery({
      staleTime: 1000,
      queryKey: ['getGameDetail', slug],
      queryFn: () => gamesApi.getGameDetail({ slug }),
    })
  },
  useGetScreenshots: ({ slug }) => {
    return useQuery({
      staleTime: 1000,
      queryKey: ['getGameScreenshots', slug],
      queryFn: () => gamesApi.getGameScreenshots({ slug }),
    })
  },
}
