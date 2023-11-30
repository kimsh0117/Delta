'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { Controller, Navigation, Pagination, Autoplay } from 'swiper'
// hooks
import useGameDetail from '@/features/games/useGameDetail'
import useGameScreenshots from '@/features/games/useGameScreenshots'
import useWindowSize from '@/hooks/useWindowSize'
// ui components
import Layout from '@/features/ui/Layout'
import Icon from '@/features/ui/Icon'
import Button from '@/features/ui/Button'
// styles
import * as Styled from './styled'

const Page = ({ slug }) => {
  const { data: details } = useGameDetail({ slug })
  const { data: screenshots } = useGameScreenshots({
    slug,
  })
  const { width } = useWindowSize()
  const [swiperReviews, setSwiperReviews] = React.useState()
  const [reviewsActiveIndex, setReviewsActiveIndex] = React.useState(0)

  if (!details || !screenshots) {
    return null
  }

  return (
    <Layout>
      <Styled.Container>
        <Styled.Title>{details.name}</Styled.Title>
        <Styled.Link
          target='_blank'
          href={details.website}
          rel='noreferrer'
          aria-label={details.website}
        >
          {details.website}
        </Styled.Link>
        <Styled.Subtitle>{details.description_raw}</Styled.Subtitle>

        <Styled.ScreenshotsContainer
          modules={[Controller, Navigation, Pagination, Autoplay]}
          controller={{ control: swiperReviews }}
          onSwiper={setSwiperReviews}
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={swiper =>
            setReviewsActiveIndex(swiper.activeIndex - 2)
          }
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {screenshots.results.map(screenshot => (
            <SwiperSlide key={screenshot.id}>
              <Styled.Screenshot>
                <Image
                  src={`${screenshot.image}`}
                  alt='screenshot'
                  width={1440}
                  height={width > 743 ? 722 : 300}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </Styled.Screenshot>
            </SwiperSlide>
          ))}
        </Styled.ScreenshotsContainer>

        <Styled.Control>
          {/* previous btn */}
          <Styled.ReverseButton
            aria-label='previous'
            onClick={() => swiperReviews?.slidePrev(800)}
          >
            <Icon name='arrow' />
          </Styled.ReverseButton>
          {/* bullets */}
          {swiperReviews && swiperReviews.loopedSlides && (
            <Styled.BulletContainer>
              {Array.from(
                {
                  length:
                    swiperReviews.slides.length -
                    swiperReviews?.loopedSlides * 2,
                },
                (v, k) => (
                  <Styled.Bullet
                    key={k.toString()}
                    $isactive={reviewsActiveIndex === k}
                  />
                ),
              )}
            </Styled.BulletContainer>
          )}
          {/* next btn */}
          <Button
            onClick={() => {
              swiperReviews?.slideNext(800)
            }}
            aria-label='next'
          >
            <Icon name='arrow' />
          </Button>
        </Styled.Control>
      </Styled.Container>
    </Layout>
  )
}

export default Page
