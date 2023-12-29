import styled from 'styled-components'

const maxMobileWidthTwo = '620px'
const maxMobileWidth = '890px'
const maxMobileWidthThree = '1158px'

export const Main = styled.main``

export const MainContainer = styled.div`
max-width: 1178px;
margin: 0 auto;
padding: 52px 10px 37px;
@media screen and (max-width: ${maxMobileWidthTwo}) {
padding: 85px 10px 84px;
}
`
export const MainH2 = styled.h2`
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 42px;
color: #000000;
margin-bottom: 30px;
&:hover::before {
    border-top: 2px solid #0080C1;
    border-left: 2px solid #0080C1;
  }


  @media screen and (max-width: ${maxMobileWidthTwo}) {
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 13px;
    cursor: pointer;
  }
}
`
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
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
