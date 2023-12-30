import styled from 'styled-components'

const maxMobileWidthTwo = '768px'
// @media screen and (max-width: ${maxMobileWidthTwo}) {
//     left: calc(50% - 160px);
//     top: 55px;
//   }
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`
export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - 183px);
  top: calc(50% - 219.5px);
  opacity: 1;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    position: absolute;
    z-index: 2;
    left: calc(50% - 160px);
    top: 55px;
    opacity: 1;
  }
`
export const ModalFormLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`
export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 120px;
    height: auto;
  }
`
export const ModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::-moz-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;
    margin-bottom: 14px;

    &::-moz-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`
export const ModalInputLogin = styled(ModalInput)`
  margin-bottom: 30px;
`
export const ModalBtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
  }
`

export const ModalBtnEnterA = styled.a`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ModalBtnSingup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
  }
`
export const ModalBtnSingupA = styled.a`
width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #000000;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: ${maxMobileWidthTwo}) {
font-size: 16px;
line-height: 24px;
}
`

export const Div = styled.div`
color: red;
bgc: blue;
`

export const ErrorDiv = styled.div`
color: red;`