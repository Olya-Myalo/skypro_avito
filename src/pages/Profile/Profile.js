import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CenterBlockProfile from '../../components/CenterBlockProfile/CenterBlockProfile copy'
import AdsComponent from '../../components/AdsComponent/AdsComponent'

const Profile = () => {
const profileKey = true
  //сделать запрос на получение списка для юзера
  return (
    <S.Wrapper>
      <S.Container>
        <Header profileKey={profileKey} />
        <S.MainContainer>
          <CenterBlockProfile />
          <S.MainContent>
            <S.ContentCards>
              <AdsComponent />
            </S.ContentCards>
          </S.MainContent>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile
