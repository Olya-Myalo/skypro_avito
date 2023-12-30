import * as S from './Profile.styled'
import Footer from '../../components/Footer/Footer'
import {
  useGetAdsUserQuery,
  useGetСurrentUserQuery,
} from '../../store/Service/serviceQuery'
import AdItemUser from '../../components/AdItem/AdItemUser'
import UserProfile from '../../components/UserProfile/UserProfile'
import ModalAddAd from '../../components/Modal/ModalAddAd/ModalAddAd'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loader from '../../components/Loader/Loader'

const Profile = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data, isLoading } = useGetAdsUserQuery()
  const { data: user, isLoading: isLoading2 } = useGetСurrentUserQuery()
  if (isLoading || isLoading2) return <Loader />

  const Logut = () => {
    navigate('/')
    localStorage.clear()
    window.location.reload()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>
            <S.Logo>
              <S.LogoMobLink>
                <S.LogoMobImg src="/img/logo-mob.png" alt="logo" />
              </S.LogoMobLink>
            </S.Logo>
            <S.HeaderBtnPutAd onClick={openModal}>
              Разместить объявление
            </S.HeaderBtnPutAd>
            <S.HeaderBtnLk onClick={Logut}>Выйти</S.HeaderBtnLk>
          </S.HeaderNav>
          {isModalOpen && <ModalAddAd data={data} onClose={closeModal} />}
        </S.Header>
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
