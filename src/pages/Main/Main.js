import { useGetAdsQuery } from '../../Service/ServiceAds'
import FooterMob from '../../components/FooterMob/FooterMob'
import ListAds from '../../components/ListAds/ListAds'
import SearchMain from '../../components/SearchMain/SearchMain'
import * as S from './Main.styled'

const Main = () => {
  const { data, isLoading } = useGetAdsQuery()
  console.log(data)
  return (
    <S.BodyMain>
      <S.WrapperMain>
        <S.Container>
          <S.Header>
            <S.HeaderNav>
              <S.BtnMainEnter id="btnMainEnter">
                Вход в личный кабинет
              </S.BtnMainEnter>
            </S.HeaderNav>
          </S.Header>
          <S.Main>
            <SearchMain />
            <S.MainContainer>
              <S.MainTitle>Объявления</S.MainTitle>
              <ListAds />
            </S.MainContainer>
          </S.Main>
          <FooterMob />
        </S.Container>
      </S.WrapperMain>
    </S.BodyMain>
  )
}

export default Main
