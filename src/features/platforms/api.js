import { RAWG_BASE_URL } from '@/constants'
import add from '@/utils/add'
import pipe from '@/utils/pipe'

export const platformsApi = {
  getPlatforms: async () => {
    const url = pipe(
      `/platforms?key=${process.env.NEXT_PUBLIC_RAWG_KEY}`,
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
