import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import Main from './pages/Main/Main';
import AdDetails from './pages/AdDetails/AdDetails';
import Signup from './pages/Signup/Signup';

const AppRoutes = ({ user, setUser }) => {
  console.log(user)
  return (
    <Routes>
        <Route path="/" element={<Main user={user} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route exact path="/profile" Component={Profile}/>
        <Route exact path="/sellerProfile" Component={SellerProfile}/>
        <Route path="/ad/:adId" Component={AdDetails} /> 

    </Routes>
  );
};

export default AppRoutes;

