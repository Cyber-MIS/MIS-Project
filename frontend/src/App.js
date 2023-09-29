// Authentication
import Login from './pages/authentication/login';
import UserReg from './pages/authentication/registerForm';

// Dashboard Views
import Dashboard from './pages/dashboard/dashboard';
import ChildView from './pages/dashboard/ChildView';
import FundView from './pages/dashboard/FundView';
import InquiryView from './pages/dashboard/InquiryView';
import OrphanageView from './pages/dashboard/OrphanageView';
import UserView from './pages/dashboard/UserView';
import WorkerView from './pages/dashboard/WorkerView';

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<UserReg/>}/>

          <Route path='/' element={<Dashboard/>}/>
          <Route path='/childview' element={<ChildView/>}/>
          <Route path='/fundview' element={<FundView/>}/>
          <Route path='/inquiryview' element={<InquiryView/>}/>
          <Route path='/orphanageview' element={<OrphanageView/>}/>
          <Route path='/userview' element={<UserView/>}/>
          <Route path='/workerview' element={<WorkerView/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );

  }
  
export default App;
