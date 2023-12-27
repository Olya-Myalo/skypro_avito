import React from 'react'
import * as S from './ModalFeedback.styled'

export const FeedbackItem = ({ author, text, avatar, time }) => {
  const sellsFromDate = new Date(time)
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const formattedDate = `${sellsFromDate.getDate()} ${
    monthNames[sellsFromDate.getMonth()]
  }
  `

  return (
    <>
      <S.ReviewItem>
        <S.ReviewLeft>
          <S.ReviewImg>
            <S.ReviewImgImg src={avatar} alt="avatar" />
          </S.ReviewImg>
        </S.ReviewLeft>
        <S.ReviewRight>
          <S.ReviewName>
            {' '}
            {author}
            <S.ReviewNameSpan>{formattedDate}</S.ReviewNameSpan>
          </S.ReviewName>
          <S.ReviewTitle>Комментарий</S.ReviewTitle>
          <S.ReviewText>{text}</S.ReviewText>
        </S.ReviewRight>
      </S.ReviewItem>
    </>
  )
}
