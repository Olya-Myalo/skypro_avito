import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { useGetAdsQuery } from '../../store/Service/serviceQuery'
import * as S from './Main.styled'
import AdItem from '../../components/AdItem/AdItem'
import { useSelector } from 'react-redux'

const Main = () => {
  const { data, isLoading } = useGetAdsQuery()
  const [productsShow, setProductsShow] = useState(data)
  const token = useSelector(state => state.user.access);
  const Authorization = !!token

  if (isLoading) return <div>идет загрузка</div>

  return (
    <S.Wrapper>
      <S.Container>
        <Header data={data} Authorization={Authorization} />
        <S.Main>
          <Search products={data} setProductsShow={setProductsShow} />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdItem products={productsShow ? productsShow : data} />
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
