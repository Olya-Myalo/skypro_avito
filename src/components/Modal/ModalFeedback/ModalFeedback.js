import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation } from '../../../store/Service/serviceQuery'
import Footer from '../../Footer/Footer'
import { Header } from '../../Header/Header.styled'
import * as S from './ModalFeedback.styled'
import { useSelector } from 'react-redux'
import { formatDateTime } from '../../../utils/formatDate'

export const ModalFeedback = ({ feedback, onClose }) => {
  const modalRef = useRef(null)
  const { adId } = useParams()
  const Authorization = useSelector((state) => state.user.access)
  const [addFeedback] = useAddCommentMutation(adId)
  const [newFeedback, setNewFeedback] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('modal', handleClick)

    return () => {
      document.removeEventListener('modal', handleClick)
    }
  }, [onClose])

  const handleAddComment = async (event) => {
    event.preventDefault()

    if (!newFeedback) {
      setError('Пожалуйста, введите комментарий')
      return
    }
    if (newFeedback) {
      await addFeedback({ text: newFeedback, id: adId })
      setNewFeedback('')
    }
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Container ref={modalRef}>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle onClick={onClose}>Отзывы о товаре</S.ModalTitle>
            <S.ModalBtnClose onClick={onClose}>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalScroll>
              {error && <S.Error>{error}</S.Error>}
              <S.ModalFormNewArt>
                {!Authorization ? (
                  null
                ) : (
                  <S.FormNewArtBlock>
                    <S.FormNewArtLabel for="text">
                      Добавить отзыв
                    </S.FormNewArtLabel>
                    <S.FormNewArtArea
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Введите отзыв"
                      value={newFeedback}
                      onChange={(e) => setNewFeedback(e.target.value)}
                    ></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                )}
                {!Authorization ? (
                  null
                ) : (
                  <S.FormNewArtBtnPub
                    onClick={handleAddComment}
                    disabled={!newFeedback}
                  >
                    Опубликовать
                  </S.FormNewArtBtnPub>
                )}
              </S.ModalFormNewArt>
              <S.ModalReviews>
                <S.ReviewsReview>
                  {feedback
                    ? feedback.map((comment, index) => (
                        <S.ReviewItem key={index}>
                          <S.ReviewLeft>
                              <S.ReviewImg
                                src={`http://localhost:8090/${comment.author.avatar}`}
                                alt="avatar"
                              />
                          </S.ReviewLeft>
                          <S.ReviewRight>
                            <S.ReviewName>
                              {comment.author.name}
                              <S.ReviewNameSpan>
                                {formatDateTime(comment.created_on)}
                              </S.ReviewNameSpan>
                            </S.ReviewName>
                            <S.ReviewTitle>Комментарий</S.ReviewTitle>
                            <S.ReviewText>{comment.text}</S.ReviewText>
                          </S.ReviewRight>
                        </S.ReviewItem>
                      ))
                    : null}
                </S.ReviewsReview>
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
