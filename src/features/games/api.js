import { RAWG_BASE_URL } from '@/constants'
import add from '@/utils/add'
import pipe from '@/utils/pipe'

export const gamesApi = {
  getGames: async ({
    pageParam,
    platformParam,
    orderingParam,
    searchParam,
  }) => {
    const url = pipe(
      `/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&page=${pageParam}${platformParam}${orderingParam}${searchParam}`,
      add(RAWG_BASE_URL),
    )
    // This request should be refetched on every request.
    // Similar to 'getServerSideProps'
    const response = await fetch(url, {
      cache: 'no-store',
    })

    const data = await response.json()

    return data
  },
  getGameDetail: async ({ slug }) => {
    const url = pipe(
      `/games/${slug}?key=${process.env.NEXT_PUBLIC_RAWG_KEY}`,
      add(RAWG_BASE_URL),
    )

    // This request should be refetched on every request.
    // Similar to 'getServerSideProps'
    const response = await fetch(url, {
      cache: 'no-store',
    })

    const data = await response.json()

    return data
  },
  getGameScreenshots: async ({ slug }) => {
    const url = pipe(
      `/games/${slug}/screenshots?key=${process.env.NEXT_PUBLIC_RAWG_KEY}`,
      add(RAWG_BASE_URL),
    )

    // This request should be refetched on every request.
    // Similar to 'getServerSideProps'
    const response = await fetch(url, {
      cache: 'no-store',
    })

    const data = await response.json()

    return data
  },
}
