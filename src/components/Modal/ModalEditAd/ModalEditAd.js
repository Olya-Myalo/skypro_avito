import { useState } from 'react'

import {
  useEditAdMutation,
  useAddImgAdMutation,
  useDeleteImgAdMutation,
} from '../../../store/Service/serviceQuery'
import * as S from './ModalEditAd.styled'

export const ModalEditAd = ({ data, onClose }) => {
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [isImages, setIsImages] = useState([])
  const [isError, setIsError] = useState('')
  const id = data.id
  const [deleteImages] = useDeleteImgAdMutation(id)
  const [postImage] = useAddImgAdMutation(id)
  const [Input, setInput] = useState([])
  const [editAd] = useEditAdMutation()

  const handleFileSelect = async (event) => {
    const files = Array.from(event.target.files)
    setInput([...Input, files.flat()].flat())
    const reader = new FileReader()
    reader.onload = () => {
      const imagesData = files.map((file) => ({
        file,
        dataURL: reader.result,
      }))
      setIsImages((prevImages) => [...prevImages, ...imagesData])
    }
    files.forEach((file) => reader.readAsDataURL(file))
  }

  const clickChangeAd = async () => {
    try {
      const result = await editAd({
        title,
        description,
        price: Number(price),
        id,
      })
      for (let i = 0; i < Input.length; i++) {
        const formData = new FormData()
        formData.append('file', Input[i])
        await postImage({ id, file: formData })
      }
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteImage = async (e, image) => {
    e.preventDefault()
    e.stopPropagation()
    const data = { image, id }
    try {
      await deleteImages(data)
      setIsImages((images) => images.filter((img) => img !== image))
    } catch (error) {
      setIsError(error)
    }
  }

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Редактировать объявление</S.ModalTitle>
          <S.ModalMobTitle onClick={onClose}>Редактировать</S.ModalMobTitle>
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
                value={title}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></S.FormNewArtArea>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtP>
                Фотографии товара
                <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              </S.FormNewArtP>
              <S.FormNewArtBarImg>
                {data &&
                  data.images.map((image, index) => (
                    <S.FormNewArtImg key={index}>
                      <S.DeleteImageBtnDiv>
                        <S.DeleteImageBtn
                          onClick={(e) => {
                            handleDeleteImage(e, image)
                          }}
                        >
                          Х
                        </S.DeleteImageBtn>
                      </S.DeleteImageBtnDiv>
                      <S.FormNewArtImgImg
                        src={!image ? '' : `http://localhost:8090/${image.url}`}
                        alt=""
                      />
                    </S.FormNewArtImg>
                  ))}
                {[...Array(5 - data.images.length)].map((_, index) => (
                  <S.FormNewArtImg key={index}>
                    {isImages[index] ? (
                      <S.FormNewArtImgImg2
                        src={isImages[index].dataURL}
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
                      onChange={handleFileSelect}
                    />
                  </S.FormNewArtImg>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="number"
                name="price"
                id="formPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </S.FormNewArtBlock>
            <div>{isError}</div>
            <S.FormNewArtBtnPub
              onClick={() => {
                clickChangeAd()
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

export default ModalEditAd
