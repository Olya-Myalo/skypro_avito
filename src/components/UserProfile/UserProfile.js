import { useEffect, useState } from 'react'
import {
  useChangeAvatarMutation,
  useUserUpdateMutation,
} from '../../store/Service/serviceQuery'
import MainMenu from '../MainMenu/MainMenu'
import * as S from './UserProfile.styled'

const UserProfile = ({ user }) => {
  const [UpdateUser] = useUserUpdateMutation()
  const [userData, setUserData] = useState({
    name: user?.name,
    surname: user?.surname,
    city: user?.city,
    phone: user?.phone,
  })
  const [changeAvatar] = useChangeAvatarMutation()
  const [avatarUrl, setAvatarUrl] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    avatarUrl === null
      ? setAvatarUrl('../img/profileImg.jpg')
      : setAvatarUrl(`http://localhost:8090/${user?.avatar}`)
  }, [userData])

  const handleInputChange = (e) => {
    setUserData({
      ...userData.data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedData = await UpdateUser(userData).unwrap()
      console.log('Пользователь успешно обновлен', updatedData)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleAvatarChange = async (event) => {
    event.preventDefault()
    const selectedAvatar = event.target.files[0]
    if (!selectedAvatar) {
      setError('Файл не выбран')
      return
    }
    try {
      const formData = new FormData()
      formData.append('file', selectedAvatar)
      await changeAvatar(formData)
      setAvatarUrl(URL.createObjectURL(selectedAvatar))
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, {userData?.name}!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft action="#">
              <S.SettingImgImg alt="" src={avatarUrl} />
              <S.ErrorDiv>{error}</S.ErrorDiv>
              <S.SettingsChangePhoto>
                Заменить
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleAvatarChange(e)}
                />
              </S.SettingsChangePhoto>
            </S.SettingsLeft>
            <S.SettingsRight>
              <S.SettingForm action="#" onSubmit={handleSubmit}>
                <S.SettingsDiv>
                  <S.Label htmlFor="fname">Имя</S.Label>
                  <S.SettingInputAll
                    id="settings-fname"
                    name="name"
                    type="text"
                    value={userData?.name}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="lname">Фамилия</S.Label>
                  <S.SettingInputAll
                    id="settings-lname"
                    name="surname"
                    type="text"
                    value={userData?.surname}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="city">Город</S.Label>
                  <S.SettingInputAll
                    id="settings-city"
                    name="city"
                    type="text"
                    value={userData?.city}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="phone">Телефон</S.Label>
                  <S.SettingInputPhone
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    value={userData?.phone}
                    onChange={handleInputChange}
                    placeholder="+79161234567"
                  />
                </S.SettingsDiv>
                <S.ErrorDiv>{error}</S.ErrorDiv>
                <S.SettingBtn id="settings-btn" type="submit">
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

export default UserProfile
