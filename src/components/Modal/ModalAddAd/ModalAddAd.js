import { useState } from 'react'
import {
  useAddAdMutation,
  useAddImgAdMutation,
} from '../../../store/Service/serviceQuery'
import * as S from './ModalAddAd.styled'
// import Arrow from '../../../assets/arrow.svg'

export const ModalAddAd = ({ data, onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [isImageSrc, setIsImage] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [error, setError] = useState('')
  const adId = data.id
  const [postAdsImage] = useAddImgAdMutation(adId)
  const [addAds] = useAddAdMutation()

  const handleImageAd = async (e) => {
    const files = Array.from(e.target.files)
    setIsImage([...isImageSrc, files.flat()].flat())
    for (const file of files) {
      const dataURL = await fileDataURL(file)
      const imageData = {
        file,
        dataURL,
      }
      setSelectedImages((prevImages) => [...prevImages, imageData])
    }
  }

  const fileDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const createAd = async () => {
    try {
      const result = await addAds({ title, description, price })
      for (let i = 0; i < isImageSrc.length; i++) {
        const formData = new FormData()
        formData.append('file', isImageSrc[i])
        await postAdsImage({ id: result.data.id, file: formData })
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle onClick={onClose} >Новое объявление</S.ModalTitle>
          <S.ModalBtnClose onClick={onClose}>
            <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
          </S.ModalBtnClose>
          <S.ModalFormNewArt>
            <S.FormNewArtBlock>
              <S.FormNewArtLabel htmlFor="text">Название</S.FormNewArtLabel>
              <S.FormNewArtInput
                type="text"
                name="name"
                id="formName"
                placeholder="Введите
                  название"
                onChange={(e) => setTitle(e.target.value)}
              ></S.FormNewArtInput>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtLabel htmlFor="text">Описание</S.FormNewArtLabel>
              <S.FormNewArtArea
                name="text"
                id="formArea"
                cols="auto"
                rows="5"
                placeholder="Введите описание"
                onChange={(e) => setDescription(e.target.value)}
              ></S.FormNewArtArea>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtP>Фотографии товара</S.FormNewArtP>
              <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              <S.FormNewArtBarImg>
                {[...Array(5)].map((_, index) => (
                  <S.FormNewArtImg key={index}>
                    {selectedImages[index] ? (
                      <S.FormNewArtImgImg2
                        src={selectedImages[index].dataURL}
                        alt="Выбранное изображение"
                      />
                    ) : (
                      <S.FormNewArtImgImg src="" alt="" />
                    )}
                    <S.FormNewArtBarImgCover
                      onClick={() =>
                        document.getElementById(`fileInput${index}`).click()
                      }
                    ></S.FormNewArtBarImgCover>
                    <input
                      type="file"
                      id={`fileInput${index}`}
                      style={{ display: 'none' }}
                      onChange={(e) => handleImageAd(e)}
                    />
                  </S.FormNewArtImg>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="text"
                name="price"
                id="formName"
                placeholder="₽"
                onChange={(e) => setPrice(e.target.value)}
              />
            </S.FormNewArtBlock>
            <S.ErrorDiv>{error}</S.ErrorDiv>
            <S.FormNewArtBtnPub
              onClick={() => {
                createAd()
                onClose()
              }}
              id="btnPublish"
            >
              Опубликовать
            </S.FormNewArtBtnPub>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.Wrapper>
  )
}

export default ModalAddAd
