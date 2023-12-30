import styled from 'styled-components'
const maxMobileWidth = '890px'
const maxMobileWidthTwo = '620px'

export const MainCenterBlock = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: ${maxMobileWidth}) {
    margin: 0 auto;
    padding: 0 20px;
  }

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

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`
export const MainProlile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    padding: 0 0 40px;
  }
`

export const ProfileContent = styled.div`
  max-width: 834px;

  @media screen and (max-width: ${maxMobileWidth}) {
    max-width: 834px;
    width: 100%;
  }
`
export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1;
  }
`

export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  @media screen and (max-width: ${maxMobileWidth}) {
    flex-wrap: wrap;
  }
`
export const SettingsLeft = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`

export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 132px;
    height: 132px;
  }
`

export const SettingImgImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 132px;
    height: 132px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
export const SettingsChangePhoto = styled.label`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`

export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`
export const SettingForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`
export const SettingInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    border-radius: 30px;
    padding: 9px 17px;
    &::-moz-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`
export const SettingInputAll = styled(SettingInput)`
  width: 300px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`
export const SettingInputPhone = styled(SettingInput)`
  width: 614px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`

export const SettingBtn = styled.button`
font-size: 16px;
line-height: 1;
color: #FFFFFF;
width: 154px;
height: 50px;
margin: 10px 7px 0;
background-color: #009EE4;
border-radius: 6px;
border: 1px solid #009EE4;

&:hover {
  background-color: #0080C1;

@media screen and (max-width: ${maxMobileWidthTwo}) {
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 46px;
  margin: 8px 0px 0;
}

`
export const MainTitle = styled.h3`
  margin-bottom: 20px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 30px;
  }
`
export const ErrorDiv = styled.div`
color: red;`
