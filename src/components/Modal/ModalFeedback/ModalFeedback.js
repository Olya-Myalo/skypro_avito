import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation } from '../../../store/Service/serviceQuery'
import Footer from '../../Footer/Footer'
import { Header } from '../../Header/Header.styled'
import * as S from './ModalFeedback.styled'
import { useSelector } from 'react-redux'
import { formatDateTime } from '../../../utils/formatDate'

export const ModalFeedback = ({ comments, onClose }) => {
  const modalRef = useRef(null)
  const { adId } = useParams()
  const token = useSelector((state) => state.user.access)
  const [addComment, { isLoading }] = useAddCommentMutation(adId)
  const [textComment, setTextComment] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [onClose])

  const handleAddComment = async (event) => {
    event.preventDefault()

    if (!textComment) {
      setError('Пожалуйста, введите комментарий')
      return
    }
    if (textComment) {
      await addComment({ text: textComment, id: adId })
      setTextComment('')
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
                      value={textComment}
                      onChange={(e) => setTextComment(e.target.value)}
                    ></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                )}
                {!token ? (
                  ''
                ) : (
                  <S.FormNewArtBtnPub
                    onClick={handleAddComment}
                    disabled={!textComment}
                  >
                    {isLoading ? 'Публикация...' : 'Опубликовать'}
                  </S.FormNewArtBtnPub>
                )}
              </S.ModalFormNewArt>
              <S.ModalReviews>
                <S.ReviewsReview>
                  {comments
                    ? comments.map((comment, index) => (
                        <S.ReviewItem key={index}>
                          <S.ReviewLeft>
                            <S.ReviewImg>
                              <S.ReviewImgImg
                                src={`http://localhost:8090/${comment.author.avatar}`}
                                alt="avatar"
                              />
                            </S.ReviewImg>
                          </S.ReviewLeft>
                          <S.ReviewRight>
                            <S.ReviewName>
                              {' '}
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
