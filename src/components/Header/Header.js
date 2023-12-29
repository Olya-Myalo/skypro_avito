import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'
import { ModalAddAd } from '../Modal/ModalAddAd/ModalAddAd'
import { useState } from 'react'

const Header = ({data, Authorization }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <S.LogoMobLink to='/'>
            <S.LogoMobImg src="/img/logo-mob.png" alt="logo" />
          </S.LogoMobLink>
        </S.Logo>
        { Authorization ? (
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