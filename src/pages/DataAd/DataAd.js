import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetAdsIdQuery,
  useGetAllCurrentUserCommentsQuery,
  useDelAdsIdMutation,
} from '../../store/Service/serviceQuery'
import * as S from './DataAd.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainMenu from '../../components/MainMenu/MainMenu'

import { useState, useEffect } from 'react'
import { ModalFeedback } from '../../components/Modal/ModalFeedback/ModalFeedback'

import ModalEditAd from '../../components/Modal/ModalEditAd/ModalEditAd'

const DataAd = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenReviews, setIsModalOpenReviews] = useState(false)
  const [adComments, setAdComments] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { adId } = useParams()
  console.log(adId)

  const { data: advComments } = useGetAllCurrentUserCommentsQuery(adId)

  const [DeteleAds] = useDelAdsIdMutation(adId)
  useEffect(() => {
    if (advComments) {
      setAdComments(advComments)
    }
  }, [advComments])

  let showEdit = false
  const { data, isLoading } = useGetAdsIdQuery(adId)
  console.log(data)

  const openModal = () => {
    setIsModalOpen(true) // Открываем модальное окно
  }

  const closeModal = () => {
    setIsModalOpen(false) // Закрываем модальное окно
  }

  const imageUrls = data?.images?.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const currentUser = localStorage.getItem('id_сur_user')

  if (isLoading || !data) return <div>идет загрузка</div>

  const token = localStorage.getItem('access_token')
  const Authorization = !!token

  if (Authorization) {
    localStorage.setItem('id_seller', data.user.id)
    console.log('id продавца', data.user.id)
  }
  console.log('id текущего пользователя', currentUser)

  if (data.user.id === parseInt(currentUser, 10)) {
    showEdit = true
  }

  const createdTime = new Date(data.created_on)
  const DeleteAtdFunc = async () => {
    setDeleted(true)
    DeteleAds({ adId: adId })
    navigate('/')
  }

  const formattedTime = `${createdTime.getHours()}:${
    createdTime.getMinutes() < 10 ? '0' : ''
  }${createdTime.getMinutes()}`

  const sellsFromDate = new Date(data.user.sells_from)
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
  const formattedDate = `${
    monthNames[sellsFromDate.getMonth()]
  } ${sellsFromDate.getFullYear()}`

  return (
    <div>
      {/* Обьявление
      <h1>{data.title}</h1> */}
      <S.Wrapper>
        <S.Container>
          <Header Authorization={Authorization} />
          <S.Main>
            <S.MainContainer>
              <MainMenu />
            </S.MainContainer>
            <S.MainArtic>
              <S.ArticContent>
                <S.ArticleLeft>
                  <S.ArticleFillImg>
                    <S.ArticleImg>
                      <S.ArticleImgImg
                        src={`http://127.0.0.1:8090/${data?.images[selectedImageIndex]?.url}`}
                        alt=""
                      />
                    </S.ArticleImg>
                    <S.ArticleImgBar>
                      {imageUrls &&
                        imageUrls.map((imageUrl, index) => (
                          <S.ArticleImgBarDiv
                            key={index}
                            onClick={() => handleImageClick(index)}
                          >
                            <S.ArticleImgBarDivImg
                              src={imageUrl}
                              alt={`Image ${index + 1}`}
                            />
                          </S.ArticleImgBarDiv>
                        ))}
                    </S.ArticleImgBar>
                    <S.ArticleImgBarMob>
                      <S.ImgBarMobCircleActive />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                    </S.ArticleImgBarMob>
                  </S.ArticleFillImg>
                </S.ArticleLeft>

                <S.ArticleRight>
                  <S.ArticleBlock>
                    <S.ArticleTitle>{data.title}</S.ArticleTitle>
                    <S.ArticleInfo>
                      <S.ArticleDate>Сегодня в {formattedTime}</S.ArticleDate>
                      <S.ArticleCity>{data.user.city}</S.ArticleCity>
                      <S.ArticleLink
                        onClick={(e) => {
                          e.preventDefault()
                          setIsModalOpenReviews(true)
                        }}
                        href=""
                        target="_blank"
                        rel=""
                      >
                        Отзывы: {adComments ? adComments.length : '...'}
                      </S.ArticleLink>
                    </S.ArticleInfo>
                    <S.ArticlePrice>{data.price} ₽</S.ArticlePrice>
                    {showEdit ? (
                      <S.ArticleBtnBlock>
                        <S.ArticleBtnReact onClick={openModal}>
                          Редактировать
                        </S.ArticleBtnReact>

                        <S.ArticleBtnRemove
                          onClick={DeleteAtdFunc}
                          disabled={deleted}
                        >
                          {deleted ? 'Удалено' : 'Снять с публикации'}
                        </S.ArticleBtnRemove>
                      </S.ArticleBtnBlock>
                    ) : (
                      <S.ArticleBtnReact>
                        Показать телефон
                        <br />8 984 ХХХ ХХХ
                      </S.ArticleBtnReact>
                    )}

                    <S.ArticleAuthor>
                      <S.AuthorImg>
                        <S.AuthorImgImg src="" alt="" />
                      </S.AuthorImg>
                      <S.AuthorCont>
                        <Link to = '/profile'>
                        <S.AuthorName>{data.user.name}</S.AuthorName>
                        </Link>
                        <S.AuthorAbout>
                          Продает товары с {formattedDate}
                        </S.AuthorAbout>
                      </S.AuthorCont>
                    </S.ArticleAuthor>
                  </S.ArticleBlock>
                </S.ArticleRight>
              </S.ArticContent>
            </S.MainArtic>

            <S.MainContainer>
              <S.MainTitle>Описание товара</S.MainTitle>
              <S.MainContent>
                <S.MainText>{data.description}</S.MainText>
              </S.MainContent>
            </S.MainContainer>
            {isModalOpenReviews && (
              <ModalFeedback
                onClose={() => setIsModalOpenReviews(false)}
                comments={advComments}
                advId={adId}
              />
            )}
          </S.Main>
          <Footer />
        </S.Container>
        {isModalOpen && <ModalEditAd data={data} onClose={closeModal} />}
      </S.Wrapper>
    </div>
  )
}

export default DataAd
