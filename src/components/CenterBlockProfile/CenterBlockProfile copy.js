import { useEffect, useState } from 'react'
import {
  useChangeAvatarMutation,
  useUserUpdateMutation,
} from '../../store/Service/Service'
import MainMenu from '../MainMenu/MainMenu'
import * as S from './CenterBlockProfile.styled'

const CenterBlockProfile = ({ infoUser }) => {
  const [UpdateUser] = useUserUpdateMutation()
  const [userData, setUserData] = useState({
    name: infoUser?.name,
    surname: infoUser?.surname,
    city: infoUser?.city,
    phone: infoUser?.phone,
    avatar: infoUser?.avatar,
  })
  const [changeAvatar] = useChangeAvatarMutation()
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    avatarUrl === null
      ? setAvatarUrl('../img/profileImg.jpg')
      : setAvatarUrl(`http://localhost:8090/${userData.avatar}`)
  }, [userData])

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userData)
    try {
      const updatedData = await UpdateUser(userData).unwrap()
      console.log('Пользователь успешно обновлен', updatedData)
    } catch (error) {
      console.error('Ошибка при обновлении пользователя', error)
    }
  }

  const handleImageChange = (event) => {
    let file = event.target.files?.[0]
    if (file) {
      setAvatarUrl(file)
      const reader = new FileReader()
      reader.onload = function () {
        console.log(reader.result)
        fetch(reader.result)
          .then((res) => res.blob())
          .then((blob) => {
            const formData = new FormData()
            formData.append('file', blob, 'img.gpg')
            return changeAvatar(formData)
          })
          .then((user) => {
            console.log(user)
            setUserData(user.data)
          })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, {userData.name}!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft action="#">
              <S.SettingImgImg alt="" src={avatarUrl} />
              <S.SettingsChangePhoto>
                Заменить
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleImageChange(e)}
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
                    value={userData.name}
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
                    value={userData.surname}
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
                    value={userData.city}
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
                    value={userData.phone}
                    onChange={handleInputChange}
                    placeholder="+79161234567"
                  />
                </S.SettingsDiv>
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

export default CenterBlockProfile
