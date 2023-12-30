import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import * as S from './DataAd/DataAd.styled'
import { useGetAdsQuery } from '../store/Service/serviceQuery'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'

export function PageLayout() {
  const { data, isLoading } = useGetAdsQuery()
  const Authorization = !!useSelector((state) => state.user.access)

  if (isLoading) return <Loader />

  return (
    <S.Wrapper>
      <S.Container>
        <Header data={data} Authorization={Authorization} />
        <Outlet />
        <Footer data={data} Authorization={Authorization} />
      </S.Container>
    </S.Wrapper>
  )
}
