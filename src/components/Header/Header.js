import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import { ModalAddAd } from '../Modal/ModalAddAd/ModalAddAd'
import { useState } from 'react'

const Header = ({data,  profileKey, Authorization }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    <S.Header>
      <S.HeaderNav>
        <S.Logo>
          <S.LogoMobLink>
            <S.LogoMobImg src="/img/logo-mob.png" alt="logo" />
          </S.LogoMobLink>
        </S.Logo>
        {profileKey ? (
          <>
          <S.HeaderBtnPutAd onClick={openModal}>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk onClick={Logut}>Выйти</S.HeaderBtnLk>
          </>
        ) : Authorization ? (
          <>
            <S.HeaderBtnPutAd onClick={openModal}>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk
              onClick={() => {
                navigate('/profile')
              }}
            >
              Личный кабинет
            </S.HeaderBtnLk>
          </>
        ) : (
          <S.HeaderBtnLkEnter
            onClick={() => {
              navigate('/signin')
            }}
          >
            Вход в личный кабинет
          </S.HeaderBtnLkEnter>
        )}
      </S.HeaderNav>
      {isModalOpen && 
        <ModalAddAd data={data} onClose={closeModal}/>}
    </S.Header>
  )
}

export default Header

