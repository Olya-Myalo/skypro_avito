import {  useState } from 'react'
import { useAddAdsMutation, useAddImgAdsMutation} from '../../../store/Service/serviceQuery'
import * as S from './ModalAddAd.styled'

export const ModalAddAd = ({ data,  onClose }) => {
  const [title, setTitle] = useState('пусто')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageSrc, setImageSrc] = useState([]);
  const [selectedImages, setSelectedImages] = useState([])
  const specificId = data.id;
  const [postAdsImage] = useAddImgAdsMutation(specificId)
  const [addAds] = useAddAdsMutation()

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files)
    setImageSrc([...imageSrc, files.flat()].flat())
    const reader = new FileReader()
  
    reader.onload = () => {
      const imagesData = files.map((file) => ({
        file,
        dataURL: reader.result,
      }))
      console.log('данные', imagesData)
      setSelectedImages((prevImages) => [...prevImages, ...imagesData])
    }
    files.forEach((file) => reader.readAsDataURL(file))
  };


  
  const submitAds = async () => {
    console.log('REF', imageSrc);
    const formData = new FormData()
    for (let i = 0; i < imageSrc.length; i++) {
      formData.append('file', imageSrc[i])
    }
    try {
    const result = await addAds({ title, description, price })
    await postAdsImage({id:result.data.id,  file: formData })
 } catch (error) {
        console.log(error)
      }
  }
  
  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Новое объявление</S.ModalTitle>
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
                onChange={(e) => handleFileSelect(e)}
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
            <S.FormNewArtBtnPub onClick={() => {
  submitAds();
  onClose();
}} 
          id="btnPublish">
              Опубликовать
            </S.FormNewArtBtnPub>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.Wrapper>
  )
}

export default ModalAddAd
