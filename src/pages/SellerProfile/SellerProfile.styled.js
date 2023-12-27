import styled from 'styled-components'
const maxMobileWidth = '890px'
const maxMobileWidthTwo = '620px'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    min-width: 320px;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    padding: 85px 0px 84px;
  }
`
export const MainCenterBlock = styled.div`
  margin: 0 auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0 auto;
    padding: 0 20px;
  }
`
export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  //   &:hover::before {
  //     border-top: 2px solid #0080c1;
  //     border-left: 2px solid #0080c1;
  //   }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`
export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`
export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    padding: 0 0 40px;
  }
`
export const ProfileSellContent = styled.div`
  width: 100%;
  @media screen and (max-width: ${maxMobileWidth}) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    max-width: 100%;
    width: 100%;
  }
`
export const ProfileSell = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
  @media screen and (max-width: ${maxMobileWidth}) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
    margin-right: 0px;
  }
`
export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`
export const SellerImgImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const SellerRight = styled.div`
  width: auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`
export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`
export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`
export const SellerImgMobBlock = styled.div`
display: none;
@media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
}
`
export const SellerImgMob = styled.div`
@media screen and (max-width: ${maxMobileWidthTwo}) {
display: block;
width: 132px;
height: 132px;
border-radius: 50%;
background-color: #F0F0F0;
}
`
export const SellerImgMobImg = styled.img`
@media screen and (max-width: ${maxMobileWidthTwo}) {
width: 100%;
height: auto;
display: block;
-o-object-fit: cover;
   object-fit: cover;
}
`
export const SellerBtn = styled.button`
margin-top: 20px;
background-color: #009EE4;
border-radius: 6px;
border: 1px solid #009EE4;
width: 214px;
height: 62px;
font-size: 16px;
font-weight: 500;
line-height: 22px;
color: #FFFFFF;
font-family: "Roboto", sans-serif;

&:hover {
    background-color: #0080C1;
  }

@media screen and (max-width: ${maxMobileWidthTwo}) {
width: 100%;
height: 57px;
font-size: 16px;
font-weight: 500;
line-height: 20px;
}
`
export const SellerBtnSpan = styled.span`
display: block;
font-size: 14px;
font-weight: 400;
@media screen and (max-width: ${maxMobileWidthTwo}) {
font-size: 12px;
}
`
