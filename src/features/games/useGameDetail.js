import { useGamesQuery } from '@/features/games/queries'

const useGameDetail = ({ slug }) => {
  const { data, status } = useGamesQuery.useGetGameDetail({ slug })
  return {
    data,
    status,
  }
}

export default useGameDetail
