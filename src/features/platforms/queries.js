import { useQuery } from '@tanstack/react-query'
import { platformsApi } from '@/features/platforms/api'

export const usePlatformsQuery = {
  useGetPlatforms: () => {
    return useQuery({
      staleTime: 1000,
      queryKey: ['getPlatforms'],
      queryFn: platformsApi.getPlatforms,
    })
  },
}
