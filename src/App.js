import { useEffect } from 'react'
import * as S from './App.styled'
import AppRoutes from './routes'
import { useRefreshTokenMutation } from './store/Service/Service'

function App() {
  const [refreshToken] = useRefreshTokenMutation()

  const handleRefreshToken = () => {
    refreshToken({
      access_token: localStorage.getItem('access_token'),
      refresh_token: localStorage.getItem('refresh_token'),
    })
  }

  useEffect(() => {
    handleRefreshToken()
  }, [])

  const token = localStorage.getItem('access_token')
  console.log('текущий токен', token)

  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  )
}

export default App
