import { useParams } from 'react-router-dom'
import { useGetAdsIdQuery } from '../../store/Service/serviceQuery'
import * as S from './AdDetails.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainMenu from '../../components/MainMenu/MainMenu'
const AdDetails = () => {
  const { adId } = useParams()
  console.log(adId)


  const { data, isLoading } = useGetAdsIdQuery(adId)
  console.log(data)
  if (isLoading || ! data ) return <div>идет загрузка</div>
  const token = localStorage.getItem('access_token')
  const Authorization = !!token



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
                      <S.ArticleImgImg src="" alt="" />
                    </S.ArticleImg>
                    <S.ArticleImgBar>
                      <S.ArticleImgBarDiv>
                        <S.ArticleImgBarDivImg src="" alt="" />
                      </S.ArticleImgBarDiv>
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
                    <S.ArticleTitle>
                    {data.title}
                    </S.ArticleTitle>
                    <S.ArticleInfo>
                    <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                      <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                      <S.ArticleLink
                        href=""
                        target="_blank"
                        rel=""
                      >
                        4 отзыва
                      </S.ArticleLink>
                    </S.ArticleInfo>
                    <S.ArticlePrice>2 200 ₽</S.ArticlePrice>

                    {Authorization ? (

                    <S.ArticleBtnBlock>
                      <S.ArticleBtnReact>
                        Редактировать
                      </S.ArticleBtnReact>
                      <S.ArticleBtnRemove>
                        Снять с публикации
                      </S.ArticleBtnRemove>
                    </S.ArticleBtnBlock>
        ) : (

          <S.ArticleBtnReact>
          Показать телефон<br />
      8 984 ХХХ ХХХ
        </S.ArticleBtnReact>


        )}




                    <S.ArticleAuthor>
                      <S.AuthorImg>
                        <S.AuthorImgImg src="" alt="" />
                      </S.AuthorImg>
                      <S.AuthorCont>
                        <S.AuthorName>Антон</S.AuthorName>
                        <S.AuthorAbout>
                          Продает товары с&nbsp;мая 2022
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

                <S.MainText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </S.MainText>
              </S.MainContent>
            </S.MainContainer>
          </S.Main>

          <Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  )
}

export default AdDetails
