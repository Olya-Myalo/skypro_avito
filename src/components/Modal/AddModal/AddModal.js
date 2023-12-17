import Footer from '../../Footer/Footer'
import HeaderModal from '../../Header/HeaderModal'

import * as S from './AddModalStyle'

export const AddModal = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <HeaderModal />
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Новое объявление</S.ModalTitle>
            <S.ModalBtnClose>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>

            <S.ModalFormNewArt id="formNewArt" action="#">
              <S.FormNewArtBlock>
                <S.FormNewArtLabel for="text">Название</S.FormNewArtLabel>
                <S.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите
                  название"
                ></S.FormNewArtInput>
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtLabel for="text">Описание</S.FormNewArtLabel>
                <S.FormNewArtArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="5"
                  placeholder="Введите описание"
                ></S.FormNewArtArea>
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtP>Фотографии товара</S.FormNewArtP>
                <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
                <S.FormNewArtBarImg>
                  <S.FormNewArtImg>
                    <S.FormNewArtImgImg src="" alt="" />
                    <S.FormNewArtBarImgCover></S.FormNewArtBarImgCover>
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.FormNewArtImgImg src="" alt="" />
                    <S.FormNewArtBarImgCover></S.FormNewArtBarImgCover>
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.FormNewArtBarImgCover></S.FormNewArtBarImgCover>
                    <S.FormNewArtImgImg src="" alt="" />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.FormNewArtBarImgCover></S.FormNewArtBarImgCover>
                    <S.FormNewArtImgImg src="" alt="" />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.FormNewArtBarImgCover></S.FormNewArtBarImgCover>
                    <S.FormNewArtImgImg src="" alt="" />
                  </S.FormNewArtImg>
                </S.FormNewArtBarImg>
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
                <S.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                  placeholder="₽"
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBtnPub id="btnPublish">
                Опубликовать
              </S.FormNewArtBtnPub>
            </S.ModalFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
