import Login from './pages/authentication/login';
import UserReg from './pages/authentication/registerForm';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<UserReg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

  }
  
export default App;
