import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile copy'
import AdsComponentUser from '../../components/AdsComponent/AdsComponentUser'
import {
  useGetAdsUserQuery,
  useGetUserInfoQuery,
} from '../../store/Service/serviceQuery'

const Profile = () => {
  const { data: adsMe, isLoading } = useGetAdsUserQuery()
  const { data: infoUser, isLoading: isLoading2 } = useGetUserInfoQuery()
  if (isLoading || isLoading2) return <div>идет загрузка...</div>
  const profileKey = true

  return (
    <S.Wrapper>
      <S.Container>
        <Header profileKey={profileKey} />
        <S.MainContainer>
          <CenterBlockProfile infoUser={infoUser} />
          <S.MainContent>
            <S.ContentCards>
              <AdsComponentUser adsMe={adsMe} />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
