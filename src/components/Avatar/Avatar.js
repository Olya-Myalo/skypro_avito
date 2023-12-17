import { useState } from 'react'
import * as S from '../CenterBlockProfile/CenterBlockProfile.styled'
import { useChangeAvatarMutation } from '../../store/Service/Service'

const Avatar = () => {
  const [changeAvatar] = useChangeAvatarMutation({})
  const [avatarUrl, setAvatarUrl] = useState('')

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]

    try {
      const response = await changeAvatar(file)
      setAvatarUrl(response.data.avatar)
      console.log('Аватар успешно добавлен', response)
    } catch (error) {
      console.error('Ошибка при добавлении аватара', error)
    }
  }
  return (
    <S.SettingsLeft>
      <S.SettingsImg>
        <a href="" target="_self">
          <S.SettingImgImg src={avatarUrl} alt="" />
        </a>
      </S.SettingsImg>
      <S.SettingsChangePhoto
        type="file"
        onChange={(e) => handleUploadImage(e)}
      />
    </S.SettingsLeft>
  )
}

export default Avatar
