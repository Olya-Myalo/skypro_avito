import styled from 'styled-components'

const maxMobileWidthTwo = '620px'

export const MainMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`


export const MenuLogoLink = styled.a`
  width: 54;
  height: 50px;
`
export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`


export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`
export const MenuBtn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  &:hover {
    background-color: #0080c1;
  }
`