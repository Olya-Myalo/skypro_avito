import { useState } from 'react'
import Search from '../../components/Search/Search'
import { useGetAdsQuery } from '../../store/Service/serviceQuery'
import * as S from './Main.styled'
import AdItem from '../../components/AdItem/AdItem'

const Main = () => {
  const { data, isLoading } = useGetAdsQuery()
  const [productsShow, setProductsShow] = useState(data)

  if (isLoading) return <div>идет загрузка</div>

  return (
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
  )
}

export default Main
