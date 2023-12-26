import * as S from './App.styled'
import AppRoutes from './routes'
import { UserContext } from './context'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null)

  return (
    <UserContext.Provider value={user}>
        <S.MainApp>
          <AppRoutes user={user} setUser={setUser} />
        </S.MainApp>
    </UserContext.Provider>
  )
}

export default App
