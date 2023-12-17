import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile copy'
import AdsComponentUser from '../../components/AdsComponent/AdsComponentUser'
import { useGetAdsUserQuery } from '../../store/Service/Service'

const Profile = () => {
  const { data, isLoading } = useGetAdsUserQuery()
  console.log(data, isLoading)
  if (isLoading) return <div>hujh</div>
  const profileKey = true

  return (
    <S.Wrapper>
      <S.Container>
        <Header profileKey={profileKey} />
        <S.MainContainer>
          <CenterBlockProfile />
          <S.MainContent>
            <S.ContentCards>
              <AdsComponentUser data={data} />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
