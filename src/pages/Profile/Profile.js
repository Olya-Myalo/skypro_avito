import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import {
  useGetAdsUserQuery,
  useGetUserInfoQuery,
} from '../../store/Service/serviceQuery'
import AdItemUser from '../../components/AdItem/AdItemUser'
import UserProfile from '../../components/UserProfile/UserProfile'

const Profile = () => {
  const { data, isLoading } = useGetAdsUserQuery()
  const { data: user, isLoading: isLoading2 } = useGetUserInfoQuery()
  if (isLoading || isLoading2) return <div>hujh</div>
  const profileKey = true

  return (
    <S.Wrapper>
      <S.Container>
        <Header data={data} profileKey={profileKey} />
        <S.MainContainer>
          <UserProfile user={user} />
          <S.MainContent>
            <S.ContentCards>
              <AdItemUser data={data} />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
