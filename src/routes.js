import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/Signin'
import Profile from './pages/Profile/Profile'
import SellerProfile from './pages/SellerProfile/SellerProfile'
import Main from './pages/Main/Main'
import DataAd from './pages/DataAd/DataAd'
import Signup from './pages/Signup/Signup'
import { ProtectedRoute } from './components/ProtectedRoute'
import { NotFound } from './pages/NotFound'
import { PageLayout } from './pages/PageLayot'

const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup setUser={setUser} />} />
      <Route path="/signin" element={<Signin setUser={setUser} />} />
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Main user={user} />} />
        <Route path="/ad/:adId" Component={DataAd} />
        <Route path="/sellerProfile" Component={SellerProfile} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="*" Component={<NotFound />} />
      </Route>
      <Route exact path="*" Component={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
