import styled from 'styled-components'
const maxMobileWidth = '890px'
const maxMobileWidthTwo = '620px'

const maxMobileWidthThree = '1158px'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
    // overflow: auto;
`
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  // overflow: auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    min-width: 320px;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: ${maxMobileWidth}) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    padding: 85px 0px 84px;
  }
`

export const MainContent = styled.div`
  width: 100%;
  // height: 100%;
  margin: 0 auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    margin: 0 auto;
  }
`
export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 600px;
  // height: 100vh;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: ${maxMobileWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: ${maxMobileWidthThree}) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
  }
`
export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
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
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
  }
`


export const Logo = styled.div`
  display: none;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
  }
`

export const LogoMobLink = styled.a`
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
  @media screen and (max-width: ${maxMobileWidthTwo}) {
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
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`


export const HeaderBtnLkEnter = styled.button`
width: 224px;
height: 40px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background-color: transparent;
color: #FFFFFF;
font-size: 16px;
line-height: 1;


  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #FFFFFF;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`