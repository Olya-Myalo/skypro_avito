import styled from 'styled-components'

const mobileVersion = '620px'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`
export const ContainerSignup = styled.div`
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
  top: calc(50% - 323.5px);
  opacity: 1;
  @media screen and (max-width: ${mobileVersion}) {
    left: calc(50% - 160px);
    top: 55px;
  }
`

export const ModalFormLogin = styled.form`
  width: 366px;
  height: 647px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 42px 47px;

  @media screen and (max-width: ${mobileVersion}) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
  }
`

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;
  @media screen and (max-width: ${mobileVersion}) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`
export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;

  @media screen and (max-width: ${mobileVersion}) {
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
  margin-bottom: 38px;

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

  @media screen and (max-width: ${mobileVersion}) {
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
    padding: 9px 19px;
    margin-bottom: 14px;

    &::-moz-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`
export const ModalBtnSignupEnt = styled.button`
  width: 278px;
  height: 62px;
  background-color: #009ee4;
  border-radius: 6px;
  border: none;
  // margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0080c1;
  }

  &:active {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${mobileVersion}) {
    height: 46px;
    border: none;
    margin-top: 26px;
  }
`
export const ModalBtnSignupEntOff = styled.button`
  width: 278px;
  height: 62px;
  background-color: #d9d9d9;
  border-radius: 6px;
  border: none;
  // margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${mobileVersion}) {
    height: 46px;
    border: none;
    margin-top: 26px;
  }
`
export const ModalBtnLink = styled.a`
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
  @media screen and (max-width: ${mobileVersion}) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const Div = styled.div`
  color: red;
  bgc: blue;
`
export const ErrorDiv = styled.div`
  color: red;
`
