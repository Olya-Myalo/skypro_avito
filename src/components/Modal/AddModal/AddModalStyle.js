import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
  @media screen and (max-width: 600px) {
    background-color: #ffffff;
  }
`

export const ModalBlock = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
  pointer-events: auto;

  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 1;
    left: -5px;
    opacity: 1;
  }
`

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 0 20px 0;
  }
`

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 77px;
      left: 20px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 380px) {
    font-size: 24px;
    line-height: 29px;
    position: relative;
    left: -20px;
    &:before {
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: -51px;
      cursor: pointer;
    }
  }
`

export const ModalBtnClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`

export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const ModalFormNewArt = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 2px;
  }
`

export const FormNewArtLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`
export const FormNewArtInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #c4c4c4;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
          }
        }
      }
    }
  }
`
export const FormNewArtArea = styled.textarea`
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  &::-webkit-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #c4c4c4;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
          }
        }
      }
    }
  }
`
export const FormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
    &:span {
      margin-left: 10px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`
export const FormNewArtSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 600px) {
    display: block;
    margin-left: 0px;
    margin-bottom: 9px;
    margin-top: -9px;
    color: rgba(0, 0, 0, 0.3);
  }
`
export const FormNewArtBarImg = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`
export const FormNewArtBarImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`
export const FormNewArtImg = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`
export const FormNewArtImgImg = styled.div`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
export const FormNewArtiLabel = styled.label``
export const FormNewArtInputPrice = styled.input`
  width: 200px;
  color: #000000;
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  &::-webkit-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #000000;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
          }
        }
      }
    }
  }
`
export const FormNewArtInputPriceCover = styled.input`
width: 24px;
height: 24px;
font-size: 16px;
line-height: 24px;
color: #000000;
position: absolute;
bottom: 13px;
left: 170px;
z-index: 0;
background-color: #FFFFFF;
&::after {
  content: "\A0 \20BD";
  width: 24px;
  height: 24px;
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 2;
}
@media screen and (max-width: 600px) {
  width: 100%;
  height: 21px;
  font-size: 14px;
  line-height: 21px;
  bottom: 9px;
  left: auto;
  right: 18px;
 
}
`
export const FormNewArtBtnPub = styled.button`
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
    &:hover {
      background-color: #0080c1;
    }
  }
`
