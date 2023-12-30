import { Link } from 'react-router-dom'
import styled from 'styled-components'

const mobileVersion = '620px'

export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`

export const HeaderNav = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: ${mobileVersion}) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
  }
`

export const Logo = styled.div`
  display: none;
  @media screen and (max-width: ${mobileVersion}) {
    display: block;
  }
`

export const LogoMobLink = styled(Link)`
  display: block;
  width: 32px;
  height: 32px;
`
export const LogoMobImg = styled.img`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeaderBtn = styled.button`
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`
export const HeaderBtnPutAd = styled(HeaderBtn)`
  width: 232px;
  height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: ${mobileVersion}) {
    display: none;
  }
`
export const HeaderBtnLk = styled(HeaderBtn)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: ${mobileVersion}) {
    display: none;
  }
`

export const HeaderBtnLkEnter = styled.button`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: ${mobileVersion}) {
    display: none;
  }
`
