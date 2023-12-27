import {  useState } from 'react'

import {
  useEditAdsMutation,
  useAddImgAdsMutation,
  useDelImgAdsMutation,
} from '../../../store/Service/serviceQuery'
import * as S from './ModalEditAd.styled'

export const ModalEditAd = ({ data, onClose }) => {
  console.log('данные редактирования', data)

  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [selectedImages, setSelectedImages] = useState([])
  // const [images, setImages] = useState([]);
  const id = data.id //id объявления
  const [deleteImages] = useDelImgAdsMutation(id);
  const [postAdsImage] = useAddImgAdsMutation(id)
  console.log('цена из редактора', data.images)
  const [imagesFromInput, setImagesFromInput] = useState([])
  const [editAds, { isLoading, isError, isSuccess }] = useEditAdsMutation()


  const handleFormSubmit = async () => {
    try {
      const result = await editAds({ title, description, price: Number(price), id })
      console.log(result)
      console.log(isLoading, isSuccess)
    } catch (error) {
      console.log(isError)
    }
  }
 
  
  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files)
    console.log([...imagesFromInput, files.flat()].flat());
    setImagesFromInput([...imagesFromInput, files.flat()].flat())
    const reader = new FileReader()
    //   if (files) {
    //     formData.append("file", file);
    //     postAdsImage({
    //       image: formData,
    //       id: id,
    //     });
    reader.onload = () => {
      const imagesData = files.map((file) => ({
        file,
        dataURL: reader.result,
      }))
      console.log('данные', imagesData)
      setSelectedImages((prevImages) => [...prevImages, ...imagesData])
    }
    files.forEach((file) => reader.readAsDataURL(file))
  }
 
  const submitAds = async () => {
    console.log('REF', imagesFromInput);
    const formData = new FormData()
    for (let i = 0; i < imagesFromInput.length; i++) {
      formData.append('file', imagesFromInput[i])
    }
  console.log(formData);
    await postAdsImage({ id, file: formData })
    console.log(typeof price)
    handleFormSubmit()
  }
  
  
  const handleDeleteImage = async (image) => {
    const data = { image, id };
    try {
      await deleteImages(data);
    
      setSelectedImages(images => images.filter(img => img !== image));
    
  
    } catch (error) {
      console.error('Ошибка при удалении фотографии:', error);

    }
  };
  

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Редактировать объявление</S.ModalTitle>
          <S.ModalBtnClose onClick={onClose}>
            <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
          </S.ModalBtnClose>

          <S.ModalFormNewArt >
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
              <S.FormNewArtP>Фотографии товара
              <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              </S.FormNewArtP>
              <S.FormNewArtBarImg>
             
                {/* на отображение тех которые есть в объявлении */}
                {data &&
                  data.images.map((image, index) => (
                    <S.FormNewArtImg key={index}>
                       <S.DeleteImageBtnDiv>
                        <S.DeleteImageBtn
                      onClick={() => {
                        handleDeleteImage(image)
                      }
                      }
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
                {/* добавление новых */}
                {[...Array(5 - data.images.length)].map((_, index) => (
                  // {[...Array(5)].map((_, index) => (
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
                id="formName"
                value={price}
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

export default ModalEditAd
