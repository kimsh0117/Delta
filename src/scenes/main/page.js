'use client'
// ui components
import Layout from '@/features/ui/Layout'
import GameCard from '@/features/games/GameCard'
import Bottom from './Bottom'
import PlatformSelect from '@/features/platforms/Select'
import SortSelect from '@/features/games/SortSelect'
import Header from '@/features/ui/Header'
// hooks
import useGames from '@/features/games/useGames'

// styles
import * as Styled from './styled'

const Main = () => {
  const { data } = useGames()
  return (
    <Layout>
      <Header />
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>New and trending</Styled.Title>
          <Styled.SelectContaeinr>
            <PlatformSelect />
            <SortSelect />
          </Styled.SelectContaeinr>
        </Styled.Header>

        <Styled.GameCardContainer>
          {data?.pages?.map(page =>
            page.results?.map(game => <GameCard item={game} key={game.id} />),
          )}
        </Styled.GameCardContainer>
        <Bottom />
      </Styled.Container>
    </Layout>
  )
}

export default Main
