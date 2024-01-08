import { Link, useNavigate, useParams } from 'react-router-dom'
import * as S from './DataAd.styled'
import {
  useGetAdsIdQuery,
  useGetAllCurrentUserCommentsQuery,
  useDelAdMutation,
  useGetСurrentUserQuery,
} from '../../store/Service/serviceQuery'
import MainMenu from '../../components/MainMenu/MainMenu'
import { useState } from 'react'
import { ModalFeedback } from '../../components/Modal/ModalFeedback/ModalFeedback'
import { formatDateAndTime } from '../../utils/formatDate'
import { formatDate } from '../../utils/formatDate'
import ModalEditAd from '../../components/Modal/ModalEditAd/ModalEditAd'
import { Back } from '../../components/Back'
import { PhoneVisibility } from '../../components/PhoneVisibility'
import Loader from '../../components/Loader/Loader'

const DataAd = () => {
  const navigate = useNavigate()
  const [isModalOpenEditAd, setIsModalOpenEditAd] = useState(false)
  const [isModalOpenFeedback, setIsModalOpenFeedback] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [isImage, setIsImage] = useState(0)
  const { adId } = useParams()
  const { data: advFeedback } = useGetAllCurrentUserCommentsQuery(adId)
  const { data, isLoading } = useGetAdsIdQuery(adId)
  const { data: user } = useGetСurrentUserQuery()
  const [DeleteAd] = useDelAdMutation(adId)

  const openModal = () => {
    setIsModalOpenEditAd(true)
  }

  const closeModal = () => {
    setIsModalOpenEditAd(false)
  }

  const imagesUrl = data?.images.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  const handleImageClick = (index) => {
    setIsImage(index)
  }

  if (isLoading || !data) return <Loader />

  let showUserdata = false
  if (data.user.id === parseInt(user?.id, 10)) {
    showUserdata = true
  }

  const removeFromPublication = async () => {
    setDeleted(true)
    await DeleteAd({ adId: adId })
    navigate('/profile')
  }

  return (
    <S.Main>
      <S.MainContainer>
        <MainMenu />
      </S.MainContainer>
      <S.MainArtic>
        <S.ArticContent>
          <S.ArticleLeft>
            <S.ArticleFillImg>
              <S.ArticleImg>
                <Back />
                <S.ArticleImgImg
                  src={`http://127.0.0.1:8090/${data?.images[isImage]?.url}`}
                  alt=""
                />
              </S.ArticleImg>
              <S.ArticleImgBar>
                {imagesUrl &&
                  imagesUrl.map((imageUrl, index) => (
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
                    setIsModalOpenFeedback(true)
                  }}
                  href=""
                  target="_blank"
                  rel=""
                >
                  Отзывы: {advFeedback ? advFeedback.length : 'нет отзывов'}
                </S.ArticleLink>
              </S.ArticleInfo>
              <S.ArticlePrice>{data.price} ₽</S.ArticlePrice>
              {showUserdata ? (
                <S.ArticleBtnBlock>
                  <S.ArticleBtnReact onClick={openModal}>
                    Редактировать
                  </S.ArticleBtnReact>

                  <S.ArticleBtnRemove
                    onClick={removeFromPublication}
                    disabled={deleted}
                  >
                    Снять с публикации
                  </S.ArticleBtnRemove>
                </S.ArticleBtnBlock>
              ) : (
                <PhoneVisibility data={data} />
              )}

              <S.ArticleAuthor>
                <S.AuthorImg
                  alt="avatar"
                  src={`http://127.0.0.1:8090/${data?.user.avatar}`}
                />
                <S.AuthorCont>
                  <Link
                    data={data}
                    to={
                      data.user.id === parseInt(user?.id, 10)
                        ? '/profile'
                        : `/sellerProfile/${data?.user.id}`
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
          <S.MainText>{data.description ? data.description : 'нет описания товара' }</S.MainText>
        </S.MainContent>
      </S.MainContainer>
      {isModalOpenFeedback && (
        <ModalFeedback
          onClose={() => setIsModalOpenFeedback(false)}
          feedback={advFeedback}
          advId={adId}
        />
      )}
      {isModalOpenEditAd && <ModalEditAd data={data} onClose={closeModal} />}
    </S.Main>
  )
}

export default DataAd
