import { useState } from 'react'
import * as S from './Signup.styled'
import { getSignUp } from '../../api'
import { useNavigate } from 'react-router-dom'
// import { useAccessTokenUserMutation } from '../../store/Service/token'
// import { setAuth } from '../../store/slices/auth'
// import { useDispatch } from 'react-redux'

const Signup = ({ setUser }) => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
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
  //     console.error('Ошибка при получении токена:', error.message)
  //     setError(error.message)
  //   }
  // }

  const handleRegister = async () => {
    if (!name || !email || !password || !repeatPassword) {
      setError('Заполните все поля')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      const response = await getSignUp( email, password, name, surname, city )
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      localStorage.setItem('email', email);
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      navigate('/')
      setError(null)
    } catch (error) {
      console.error('Ошибка при регистрации:', error.message)
      setError(error.message)
    }
  }

  // useEffect(() => {
  //   setError(null)
  // }, [email, password, repeatPassword, name, surname, city])

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleRegister}>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo-reg.png" alt="logo" />
            </S.ModalLogo>
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
              onChange={(e) => setRepeatPassword(e.target.value)}
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
            <S.ErrorDiv>{error}</S.ErrorDiv>

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
