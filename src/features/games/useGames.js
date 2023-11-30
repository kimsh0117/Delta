import { useGamesQuery } from '@/features/games/queries'

const useGames = () => {
  const { data, fetchNextPage } = useGamesQuery.useGetGames()

  return {
    data,
    fetchNextPage,
  }
}

export default useGames
