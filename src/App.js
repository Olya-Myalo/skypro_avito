import AppRoutes from './routes'
import { UserContext } from './context'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null)

  return (
    <UserContext.Provider value={user}>
          <AppRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  )
}

export default App
