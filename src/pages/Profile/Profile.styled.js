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

// export const Main = styled.main``

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