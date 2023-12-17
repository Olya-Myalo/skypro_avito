import { useState } from 'react'
import * as S from './Signup.styled'
import { registerUser } from '../../api'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !passwordTwo) {
      setErrorMessage('Заполните обязательные поля')
      return
    }
    if (password !== passwordTwo) {
      setErrorMessage('Пароли не совпадают')
      return
    }

    try {
      const response = await registerUser(email, password, name, surname, city)
      console.log('Registration successful:', response)
      navigate('/login')
    } catch (error) {
      console.log('Registration error:', error)
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSubmit}>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo-reg.png" alt="logo" />
            </S.ModalLogo>
            {/* {isError && error && <S.Div>{error.message}</S.Div>} */}

            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              onChange={(e) => setName(e.target.value)}
            />
            <S.ModalInput
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              onChange={(e) => setSurname(e.target.value)}
            />
            <S.ModalInput
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              onChange={(e) => setCity(e.target.value)}
            />
            <S.ErrorDiv>{errorMessage}</S.ErrorDiv>

            <S.ModalBtnSignupEnt>
              <S.ModalBtnLink>Зарегистрироваться</S.ModalBtnLink>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}

export default Signup
