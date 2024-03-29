// vendor
import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '@/lib/getQueryClient'
// apis
import { platformsApi } from '@/features/platforms/api'
import { gamesApi } from '@/features/games/api'
// ui
import Main from '@/scenes/main'

const Home = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['getPlatforms'],
    queryFn: platformsApi.getPlatforms,
  })

  await queryClient.prefetchQuery({
    queryKey: ['getGames'],
    queryFn: gamesApi.getGames,
  })

  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <Main />
    </Hydrate>
  )
}

export default Home
