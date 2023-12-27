
import { useState } from 'react'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { useGetAdsQuery, useGetUserInfoQuery, } from '../../store/Service/serviceQuery'
import * as S from './Main.styled'
// import { setAds } from '../../store/slices/userSlice'


const Main = () => {

  const { data, isLoading } = useGetAdsQuery()
  const [productsShow, setProductsShow] = useState(data);

  const token = localStorage.getItem('access_token')
  const Authorization = !!token

const {data: userInfo, isLoading: loadUser} = useGetUserInfoQuery()

console.log('данные пользователя',userInfo);


  // useEffect(() => {
  //   if (!isLoading) {
  //     dispatch(data) 
  //   }
  // }, [data, isLoading])

  if (isLoading || loadUser) return <div>идет загрузка</div>


  return (
    <S.Wrapper>
      <S.Container>
        <Header Authorization={Authorization} />
        <S.Main>
          <Search products={data} setProductsShow={setProductsShow}/>
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.ContentCards>
                <AdsComponent products={productsShow ? productsShow : data}/>
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
