import { useEffect, useState } from 'react'
import * as S from './Footer.styled'
import { NavLink } from 'react-router-dom'
import ModalAddAd from '../Modal/ModalAddAd/ModalAddAd'
import HomeLogo from '../../assets/home.svg'
import NewAdLogo from '../../assets/newAd.svg'
import ProfileLogo from '../../assets/profile.svg'

const Footer = ({ data, Authorization }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true) 
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    console.log(isModalOpen)
  }, [isModalOpen])

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <NavLink to="/">
            <S.FooterImgImg src={HomeLogo} alt="home" />
          </NavLink>
        </S.FooterImg>
        <S.FooterImg onClick={openModal}>
            <S.FooterImgImg src={NewAdLogo} alt="home" />
        </S.FooterImg>
        <S.FooterImg>
          <NavLink to={Authorization ? '/profile' : '/signin'}>
            <S.FooterImgImg src={ProfileLogo} alt="home" />
          </NavLink>
        </S.FooterImg>
      </S.FooterContainer>
     {isModalOpen && 
        <ModalAddAd data={data} onClose={closeModal}/>}
    </S.Footer>
  )
}

export default Footer
