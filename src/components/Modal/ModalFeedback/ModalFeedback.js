import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation } from '../../../store/Service/serviceQuery'
import Footer from '../../Footer/Footer'
import { Header } from '../../Header/Header.styled'
import * as S from './ModalFeedback.styled'
import { FeedbackItem } from './FeedbackItem'

export const ModalFeedback = ({ comments, onClose }) => {
  const modalRef = useRef(null)
  const { adId } = useParams()
  const token = localStorage.getItem('access_token')

  const [addComment, { isLoading }] = useAddCommentMutation(adId)
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

  const handleAddComment = async (event) => {
    event.preventDefault()

    if (!newComment) {
      setError('Пожалуйста, введите комментарий')
      return
    }
    if (newComment) {
      await addComment({ text: newComment, id: adId })
      setNewComment('')
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
                {!token ? (
                  ''
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
                      placeholder="Введите описание"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    ></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                )}
                {!token ? (
                  ''
                ) : (
                  <S.FormNewArtBtnPub
                    onClick={handleAddComment}
                    disabled={!newComment}
                  >
                    {isLoading ? 'Публикация...' : 'Опубликовать'}
                  </S.FormNewArtBtnPub>
                )}
              </S.ModalFormNewArt>
              <S.ModalReviews>
                <S.ReviewsReview>
                  {comments
                    ? comments.map((item, index) => (
                        <FeedbackItem
                          text={item.text}
                          key={index}
                          avatar={`http://localhost:8090/${item.author.avatar}`}
                          author={item.author.name}
                          time={item.created_on}
                        />
                      ))
                    : ''}
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
