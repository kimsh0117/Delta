import { useGamesQuery } from '@/features/games/queries'

const useGameScreenshots = ({ slug }) => {
  const { data, status } = useGamesQuery.useGetScreenshots({ slug })
  return {
    data,
    status,
  }
}

export default useGameScreenshots
