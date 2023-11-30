import Tag from '@/features/ui/Tag'
import StarRating from '@/features/ui/StarRating/star-rating'

import * as Styled from './styled'

const GameCard = ({ item }) => {
  return (
    <Styled.Container href={`/game/${item.slug}`}>
      <Styled.Header>
        {item.background_image && (
          <Styled.Thumbnail
            src={`${item.background_image}`}
            quality={100}
            fill
            alt='background'
            sizes='100%'
            priority
          />
        )}

        <Styled.HeaderInner>
          <Styled.Subtitle>Released: {item.released}</Styled.Subtitle>
          <Styled.Title>{item.name}</Styled.Title>

          <Styled.HeaderBottom>
            {item.genres.map(genre => (
              <Tag key={genre.id} label={genre.name} />
            ))}
          </Styled.HeaderBottom>
        </Styled.HeaderInner>
      </Styled.Header>

      <Styled.Bottom>
        <StarRating
          readOnly
          labelText=''
          height={20}
          width={20}
          defaultState={item.rating}
        />
      </Styled.Bottom>
    </Styled.Container>
  )
}

export default GameCard
