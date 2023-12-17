import { useEffect, useState } from 'react'
import {
  useChangeAvatarMutation,
  useGetUserInfoQuery,
  useUserUpdateMutation,
} from '../../store/Service/Service'
import MainMenu from '../MainMenu/MainMenu'
import * as S from './CenterBlockProfile.styled'
import { useDispatch, useSelector } from 'react-redux'
import { personalInfo } from '../../store/slices/userSlice'

const CenterBlockProfile = () => {
  const { data, isLoading } = useGetUserInfoQuery()
  const profile = useSelector(state => state.user.personalInfo)

  const [UpdateUser] = useUserUpdateMutation()
  const [changeAvatar] = useChangeAvatarMutation()
  const dispatch = useDispatch()

  const [name, setName] = useState(profile.name)
  const [surName, setSurName] = useState(profile.surname)
  const [city, setCity] = useState(profile.city)
  const [phone, setPhone] = useState(profile.phone)
  const [image, setImage] = useState('')
  const [avatar, setAvatar] = useState('')
  if (isLoading) return <div>hujh</div>
  console.log(data)

  useEffect(() => {
    if (!isLoading) {
      dispatch(personalInfo(data)) 
    }
  }, [data, isLoading])

  useEffect(() => {
    avatar === null
      ? setAvatar('../img/profileImg.jpg')
      : setAvatar(`http://localhost:8090/${profile.avatar}`)
  }, [])

  const uploadContent = (event) => {
    event.preventDefault()
    event.target.files[0] && setImage(event.target.files[0])
  }

  const sendContent = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', image)

    try {
      const response = await changeAvatar.mutateAsync(formData)
      dispatch(personalInfo(response.data))
      setAvatar(`http://localhost:8090/${response.profile.avatar}`)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const send = async () => {
    try {
      const res = await UpdateUser({
        name,
        surname: surName,
        phone,
        city,
      })

      dispatch(personalInfo(res.data))
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, {data.name}!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft>
              <S.SettingsImg>
                <a href="" target="_self">
                  <S.SettingImgImg src={avatar} alt="profileImg" />
                </a>
              </S.SettingsImg>
              <S.SettingsChangePhoto onClick={(e) => sendContent(e)} href="/">
                Заменить
              </S.SettingsChangePhoto>
              <input
                type={'file'}
                accept={'image/*'}
                onChange={(e) => uploadContent(e)}
              />
            </S.SettingsLeft>
            <S.SettingsRight>
            <S.SettingForm action="#">
                <S.SettingsDiv>
                  <S.Label htmlFor="fname">Имя</S.Label>
                  <S.SettingInputAll
                    id="settings-fname"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Обновление значения name
                    placeholder=""
                  />

                  <S.SettingInputAll
                    id="settings-lname"
                    name="surname"
                    type="text"
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)} // Обновление значения surName
                    placeholder=""
                  />

                  <S.SettingInputAll
                    id="settings-city"
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Обновление значения city
                    placeholder=""
                  />

                  <S.SettingInputPhone
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} // Обновление значения phone
                    placeholder="+79161234567"
                  />
                </S.SettingsDiv>
                <S.SettingBtn
                  id="settings-btn"
                  type="submit"
                  onClick={() => send()} // Вызов метода send() при отправке формы
                >
                  Сохранить
                </S.SettingBtn>
              </S.SettingForm>
            </S.SettingsRight>
          </S.ProfileSettings>
        </S.ProfileContent>
      </S.MainProlile>
      <S.MainTitle>Мои товары</S.MainTitle>
    </S.MainCenterBlock>
  )
}

export default CenterBlockProfile
