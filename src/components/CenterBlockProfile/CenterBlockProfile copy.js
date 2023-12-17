import { useState } from 'react'
import {
  useChangeAvatarMutation,
  useGetUserInfoQuery,
  useUserUpdateMutation,
} from '../../store/Service/Service'
import MainMenu from '../MainMenu/MainMenu'
import * as S from './CenterBlockProfile.styled'

const CenterBlockProfile = () => {
  const { data, isLoading } = useGetUserInfoQuery()
  console.log(data, isLoading)
  if (isLoading) return <div>hujh</div>

  const [UpdateUser] = useUserUpdateMutation()
  const [userData, setUserData] = useState({
    name: data?.name,
    surname: data?.surname,
    city: data?.city,
    phone: data?.phone,
  })
  const [changeAvatar] = useChangeAvatarMutation()

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

  const handleUploadImage = async (event) => {
    let file = event.target.files?.[0]
    if (file) {
      changeAvatar({ file });
    }
  };

  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, {userData.name}!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft>
            {data?.avatar ? (
              <S.SettingsImg>
                    <S.SettingImgImg
                      alt=""
                      src={`http://127.0.0.1:8090/${data.avatar}`}
                    ></S.SettingImgImg>
                    </S.SettingsImg>
                  ) : (
                    <S.SettingsImg>
                    <S.SettingImgImg></S.SettingImgImg>
                    </S.SettingsImg>
                  )}

                  <S.SettingsChangePhoto>
                    Заменить
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        handleUploadImage(e);
                      }}
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
                <S.SettingBtn
                  id="settings-btn"
                  type="submit"
                  // onClick={() => handleSubmit()}
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
