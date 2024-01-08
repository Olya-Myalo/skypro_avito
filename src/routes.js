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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Main />} />
        <Route path="/ad/:adId" element={<DataAd />} />
        <Route path="/sellerProfile/:id" element={<SellerProfile />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
