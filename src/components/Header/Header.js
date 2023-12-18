import { useNavigate } from 'react-router-dom'
import * as S from './Header.styled'

const Header = ({ profileKey, Authorization }) => {
  const navigate = useNavigate()
  const Logut = () => {
    navigate('/')
    localStorage.clear()
    window.location.reload()
  }

  return (
    <S.Header>
      <S.HeaderNav>
        <S.Logo>
          <S.LogoMobLink>
            <S.LogoMobImg src="img/logo-mob.png" alt="logo" />
          </S.LogoMobLink>
        </S.Logo>
        {profileKey ? (
          <>
            <S.HeaderBtnLk onClick={Logut}>Выйти</S.HeaderBtnLk>
          </>
        ) : Authorization ? (
          <>
            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
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
    </S.Header>
  )
}

export default Header
