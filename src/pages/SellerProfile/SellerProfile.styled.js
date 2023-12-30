import styled from 'styled-components'
const maxMobile = '890px'
const mobileVersion = '620px'

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
  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
    min-width: 320px;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: ${mobileVersion}) {
    padding: 85px 0px 84px;
  }
`
export const MainCenterBlock = styled.div`
  margin: 0 auto;
  @media screen and (max-width: ${mobileVersion}) {
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
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;
  }
`
export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`
export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
    padding: 0 0 40px;
  }
`
export const ProfileSellContent = styled.div`
  width: 100%;
  @media screen and (max-width: ${maxMobile}) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: ${mobileVersion}) {
    max-width: 100%;
    width: 100%;
  }
`
export const ProfileSell = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
  @media screen and (max-width: ${maxMobile}) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: ${mobileVersion}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const SellerLeft = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: ${mobileVersion}) {
    display: none;
    margin-right: 0px;
  }
`
export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 320px) {
    display: none;
  }
`
export const SellerImgImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const SellerRight = styled.div`
  width: auto;
  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
  }
`
export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media screen and (max-width: ${mobileVersion}) {
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

  @media screen and (max-width: ${mobileVersion}) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`
export const SellerImgMobBlock = styled.form`
  display: none;
  @media screen and (max-width: ${mobileVersion}) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`
export const SellerImgMob = styled.div`
  @media screen and (max-width: ${mobileVersion}) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f0f0f0;
  }
`
export const SellerImgMobImg = styled.img`
  @media screen and (max-width: ${mobileVersion}) {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
export const SellerBtn = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${mobileVersion}) {
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
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 12px;
  }
`
export const CardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: ${mobileVersion}) {
    margin: 0;
  }
`
export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${mobileVersion}) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
`
export const CardsImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media screen and (max-width: ${mobileVersion}) {
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`
export const CardsImageImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const CardContent = styled.div``
export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${mobileVersion}) {
    height: 16px;
    // height: auto;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const CardPlaceDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`

export const CardPlace = styled(CardPlaceDate)`
  margin-bottom: 4px;
`
export const CardDate = styled(CardPlaceDate)``

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: ${mobileVersion}) {
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

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: ${mobileVersion}) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: ${maxMobile}) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: ${mobileVersion}) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
  }
`
