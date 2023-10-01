// Authentication
import HomePage from './pages/HomePage';
import Login from './pages/authentication/login';
import UserReg from './pages/authentication/registerForm';
import RequireAuth from './utils/requireAuth'; // this is for check the authrole

// Dashboard Views
import Dashboard from './pages/dashboard/dashboard';
import ChildView from './pages/dashboard/ChildView';
import FundView from './pages/dashboard/FundView';
import InquiryView from './pages/dashboard/InquiryView';
import OrphanageView from './pages/dashboard/OrphanageView';
import UserView from './pages/dashboard/UserView';
import WorkerView from './pages/dashboard/WorkerView';
import ChildRegistration from './pages/dashboard/ChildRegistration';
import FundRegistration from './pages/dashboard/FundRegistration';
import OrphanageRegistration from './pages/dashboard/OrphanageRegistration';
import WorkerRegistration from './pages/dashboard/WorkerRegistation';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<UserReg />} />


          // have to remove just testing
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/childregistration' element={<ChildRegistration />} />
          <Route path='/fundregistration' element={<FundRegistration />} />
          <Route path='/orphanageregistration' element={<OrphanageRegistration />} />
          <Route path='/workerregistration' element={<WorkerRegistration />} />




          // All admin routes
          <Route
            path='/admin/*'
            element={
              <RequireAuth redirectedTo='/login' authRole={'admin'}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/childview' element={<ChildView />} />
                <Route path='/fundview' element={<FundView />} />
                <Route path='/inquiryview' element={<InquiryView />} />
                <Route path='/orphanageview' element={<OrphanageView />} />
                <Route path='/userview' element={<UserView />} />
                <Route path='/workerview' element={<WorkerView />} />
              </RequireAuth>
            }
          />
          // All super manager routes
          <Route
            path='/supermanager/*'
            element={
              <RequireAuth redirectedTo='/login' authRole={'superManager'}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/childview' element={<ChildView />} />
                <Route path='/fundview' element={<FundView />} />
                <Route path='/inquiryview' element={<InquiryView />} />
                <Route path='/orphanageview' element={<OrphanageView />} />
                <Route path='/userview' element={<UserView />} />
                <Route path='/workerview' element={<WorkerView />} />
              </RequireAuth>
            }
          />
          // All orphan manager routes
          <Route
            path='/orphanmanager/*'
            element={
              <RequireAuth redirectedTo='/login' authRole={'orphanManager'}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/childview' element={<ChildView />} />
                <Route path='/fundview' element={<FundView />} />
                <Route path='/inquiryview' element={<InquiryView />} />
                <Route path='/orphanageview' element={<OrphanageView />} />
                <Route path='/userview' element={<UserView />} />
                <Route path='/workerview' element={<WorkerView />} />
              </RequireAuth>
            }
          />
          // All user routes
          <Route
            path='/user/*'
            element={
              <RequireAuth redirectedTo='/login' authRole={'user'}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/childview' element={<ChildView />} />
                <Route path='/fundview' element={<FundView />} />
                <Route path='/inquiryview' element={<InquiryView />} />
                <Route path='/orphanageview' element={<OrphanageView />} />
                <Route path='/userview' element={<UserView />} />
                <Route path='/workerview' element={<WorkerView />} />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
