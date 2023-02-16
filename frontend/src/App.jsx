import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/SignIn/Login';
import Reset from './pages/Reset/Reset';
import LoginWithCode from './pages/LoginWithCode/LoginWithCode';
import {AdminLogin} from './pages/Forms/AdminLogin'
import {WelcomeLogin} from './pages/Forms/WelcomeLogin'
import {RegistrationForm} from './pages/Registration/RegistrationForm'
import {RegistrationFirstPage} from './pages/Registration/ResearcherRegFirst'
import {RegistrationSecondPage} from './pages/Registration/ResearcherRegSecond'
import {RegistrationThirdPage} from './pages/Registration/ResearcherRegThird'
import {RegistrationSubmitPage} from './pages/Registration/ResearcherRegSubmit'
import {RegCompanyFirstPage} from './pages/Registration/CompanyRegFirst'
import {RegCompanySecondPage} from './pages/Registration/CompanyRegSecond'
import {RegCompanySubmitPage} from './pages/Registration/CompanyRegSubmit'
import CompanyDashboard from './pages/CompanyDashboard/CompanyDashboard'

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/reset" element={<Reset />} />
          <Route path="/accsescode" element={<LoginWithCode />} />
          <Route exact path={"/admin"} element={<AdminLogin/>} />
          <Route exact path={"/login"} element={<WelcomeLogin/>} />
          <Route exact path={"/registrationform"} element={<RegistrationForm/>} />
          <Route exact path={"/reg-researcher-firstpage"} element={<RegistrationFirstPage/>} />
          <Route exact path={"/reg-researcher-secondpage"} element={<RegistrationSecondPage/>} />
          <Route exact path={"/reg-researcher-Thirdpage"} element={<RegistrationThirdPage/>} />
          <Route exact path={"/reg-researcher-submit"} element={<RegistrationSubmitPage/>} />
          <Route exact path={"/reg-company-firstpage"} element={<RegCompanyFirstPage/>} />
          <Route exact path={"/reg-company-secondpage"} element={<RegCompanySecondPage/>} />
          <Route exact path={"/reg-company-submitpage"} element={<RegCompanySubmitPage/>} />
          <Route exact path={"/companydashboard"} element={<CompanyDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
