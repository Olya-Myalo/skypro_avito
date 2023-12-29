import { Link, useNavigate, useParams } from 'react-router-dom'
import * as S from './DataAd.styled'
import {
  useGetAdsIdQuery,
  useGetAllCurrentUserCommentsQuery,
  useDelAdMutation,
  useGetСurrentUserQuery,
} from '../../store/Service/serviceQuery'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainMenu from '../../components/MainMenu/MainMenu'
import { useState, useEffect } from 'react'
import { ModalFeedback } from '../../components/Modal/ModalFeedback/ModalFeedback'
import ModalEditAd from '../../components/Modal/ModalEditAd/ModalEditAd'
import { formatDateAndTime } from '../../utils/formatDate'
import { formatDate } from '../../utils/formatDate'

const DataAd = ({ Authorization }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenReviews, setIsModalOpenReviews] = useState(false)
  const [adComments, setAdComments] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { adId } = useParams()
  const { data: advComments } = useGetAllCurrentUserCommentsQuery(adId)
  const { data, isLoading } = useGetAdsIdQuery(adId)
  const { data: user } = useGetСurrentUserQuery()
  const [DeteleAds] = useDelAdMutation(adId)

  useEffect(() => {
    if (advComments) {
      setAdComments(advComments)
    }
  }, [advComments])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const imageUrls = data?.images?.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  if (isLoading || !data) return <div>идет загрузка</div>

  let showEdit = false
  if (data.user.id === parseInt(user?.id, 10)) {
    showEdit = true
  }

  const DeleteAtdFunc = async () => {
    setDeleted(true)
    DeteleAds({ adId: adId })
    navigate('/')
  }

  function togglePhoneVisibility() {
    console.log('')
  }
  return (
    <div>
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
                      <S.ArticleDate>
                        {formatDateAndTime(data.created_on)}
                      </S.ArticleDate>
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
                      <S.ArticleBtnReact
                        id="phoneBtn"
                        onclick={togglePhoneVisibility()}
                      >
                        Показать телефон
                        <br />
                        {data?.user.phone.substring(0, 6)} X X X X
                      </S.ArticleBtnReact>
                    )}

                    <S.ArticleAuthor>
                      <S.AuthorImg
                        alt=""
                        src={`http://127.0.0.1:8090/${data?.user.avatar}`}
                      />
                      <S.AuthorCont>
                        <Link 
                        data={data}
                          to={
                            data.user.id === parseInt(user?.id, 10)
                              ? '/profile'
                              : '/sellerProfile'
                          }
                        >
                          <S.AuthorName>{data.user.name}</S.AuthorName>
                        </Link>
                        <S.AuthorAbout>
                          Продает товары с {formatDate(data.user.sells_from)}
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
