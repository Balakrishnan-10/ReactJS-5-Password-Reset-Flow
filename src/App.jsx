import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Navbar from './Components/Navbar';
import PagenotFound from './Pages/PagenotFound';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { useState } from 'react';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';


const App = () => {
  const [token, setToken] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/home" element={<Home token={token}/>} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword token={token} />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;