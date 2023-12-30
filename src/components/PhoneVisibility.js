import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const ArticleBtnReact = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
  width: 189px;
  margin-right: 10px;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: 768px) {
    width: 225px;
    margin-right: 0;
  }
  @media screen and (max-width: 966px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const PhoneVisibility = ({ data }) => {
  const [phoneVisibility, setPhoneVisibility] = useState(false)
  const Authorization = useSelector((state) => state.user.access)

  function togglePhoneVisibility() {
    setPhoneVisibility(!phoneVisibility)
  }

  return (
    <ArticleBtnReact id="phoneBtn" onClick={togglePhoneVisibility}>
      {Authorization
        ? phoneVisibility
          ? 'Скрыть телефон'
          : 'Показать телефон'
        : 'Авторизуйтесь, чтобы увидеть телефон'}
      <br />
      {!phoneVisibility && Authorization
        ? `${data?.user.phone.substring(0, 1)}${data?.user.phone.substring(
            1,
            4
          )} XXX XX XX`
        : data?.user.phone}
    </ArticleBtnReact>
  )
}
