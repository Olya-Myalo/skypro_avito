import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signup/Signup'
import Signup from './pages/Signin/Signin'
import Main from './pages/Main/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default AppRoutes