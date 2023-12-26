import React, { useState } from 'react'
import * as S from './Signin.styled'
import { getSignIn } from '../../api'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { setAuth } from '../../store/slices/auth'
// import { useAccessTokenUserMutation } from '../../store/Service/token'

const Signin = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  // const [postToken] = useAccessTokenUserMutation()

  // const responseToken = async () => {
  //   try {
  //     const token = await postToken({ email, password }).unwrap()
  //     dispatch(
  //       setAuth({
  //         access: token.access,
  //         refresh: token.refresh,
  //         user: JSON.parse(localStorage.getItem('user')),
  //       }),
  //     )
  //   } catch (error) {
  //     console.error('Ошибка получения токена:', error.message)
  //     setError(error.message)
  //   }
  // }

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Заполните поле ввода')
      return
    }
    try {
      const response = await getSignIn( email, password )
      setUser(response)
      localStorage.setItem('email', email);
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      navigate('/')
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ErrorDiv>{error}</S.ErrorDiv>
            <S.ModalBtnEnter id="btnEnter" type="submit">
              <S.ModalBtnEnterA>Войти</S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSingup id="btnSignUp">
              <S.ModalBtnSingupA href="/signup">
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
