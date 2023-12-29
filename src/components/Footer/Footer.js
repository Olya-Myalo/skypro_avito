import { useState } from 'react'
import * as S from './Footer.styled'
import { NavLink } from 'react-router-dom'
import ModalAddAd from '../Modal/ModalAddAd/ModalAddAd'

const Footer = ({ data, Authorization }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true) 
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <NavLink to="/" target="_self">
            <S.FooterImgImg src="img/footer1.svg" alt="home" />
          </NavLink>
        </S.FooterImg>
        <S.FooterImg onClick={openModal}>
          <a href="" target="_self">
            <S.FooterImgImg src="img/footer2.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <NavLink to={Authorization ? '/profile' : '/signin'} target="_self">
            <S.FooterImgImg src="img/footer3.svg" alt="home" />
          </NavLink>
        </S.FooterImg>
      </S.FooterContainer>
     {isModalOpen && 
        <ModalAddAd data={data} onClose={closeModal}/>}
    </S.Footer>
  )
}

export default Footer
