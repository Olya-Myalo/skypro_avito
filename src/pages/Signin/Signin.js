import React, { useState } from 'react'
import * as S from './Signin.styled'
import { loginUser } from '../../api'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setErrorMessage('Пожалуйста, заполните все поля')
      return
    }

    try {
      const response = await loginUser(email, password)
      console.log(response)
      localStorage.setItem('email', email);
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      navigate('/')
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleLogin}>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo-reg.png" alt="logo" />
            </S.ModalLogo>
            {/* {isError && error && <S.Div>{error.message}</S.Div>} */}
            <S.ModalInputLogin
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ErrorDiv>{errorMessage}</S.ErrorDiv>
            <S.ModalBtnEnter id="btnEnter" type='submit'>
              <S.ModalBtnEnterA >Войти</S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSingup id="btnSignUp">
              <S.ModalBtnSingupA href="/register">
                Зарегистрироваться
              </S.ModalBtnSingupA>
            </S.ModalBtnSingup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

export default Signin
