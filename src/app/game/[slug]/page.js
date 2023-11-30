// vendor
import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '@/lib/getQueryClient'
// apis
import { gamesApi } from '@/features/games/api'
// ui
import Page from '@/scenes/game/[slug]'

const GameDetail = async ({ params }) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['getGameDetail', params],
    queryFn: () => gamesApi.getGameDetail(params),
  })

  await queryClient.prefetchQuery({
    queryKey: ['getGameScreenshots', params],
    queryFn: () => gamesApi.getGameScreenshots(params),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Page slug={params.slug} />
    </Hydrate>
  )
}

export default GameDetail
