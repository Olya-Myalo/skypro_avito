import styled from 'styled-components'
const maxMobileWidth = '890px'
const maxMobileWidthTwo = '620px'
const maxMobileWidthThree = '1158px'



export const CardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0;
  }
`
export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  // @media screen and (max-width: ${maxMobileWidth}) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 270px);
  // }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
  // @media screen and (max-width: ${maxMobileWidthThree}) {
  //   display: grid;
  //   grid-template-columns: repeat(3, 270px);
  // }
`
export const CardsImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
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

  @media screen and (max-width: ${maxMobileWidthTwo}) {
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

  @media screen and (max-width: ${maxMobileWidthTwo}) {
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
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const CardPlaceDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`

export const CardPlace = styled(CardPlaceDate)`
  margin-bottom: 4px;
`
export const CardDate = styled(CardPlaceDate)``
