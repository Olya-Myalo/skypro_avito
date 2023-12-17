import Footer from '../../Footer/Footer'
import HeaderModal from '../../Header/HeaderModal'
import * as S from './ReviewsModalStyle'

export const ReviewsModal = () => {
  return (
    <S.Wrapper>
      <HeaderModal />
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            <S.ModalBtnClose>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalScroll>
              <S.ModalFormNewArt id="formNewArt" action="#">
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
                  ></S.FormNewArtArea>
                </S.FormNewArtBlock>
                <S.FormNewArtBtnPub id="btnPublish">
                  Опубликовать
                </S.FormNewArtBtnPub>
              </S.ModalFormNewArt>

              <S.ModalReviews>
                <S.ReviewsReview>
                  <S.ReviewItem>
                    <S.ReviewLeft>
                      <S.ReviewImg>
                        <S.ReviewImgImg src="" alt="" />
                      </S.ReviewImg>
                    </S.ReviewLeft>
                    <S.ReviewRight>
                      <S.ReviewName>Олег 14 августа</S.ReviewName>
                      <S.ReviewTitle>Комментарий</S.ReviewTitle>
                      <S.ReviewText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </S.ReviewText>
                    </S.ReviewRight>
                  </S.ReviewItem>
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
