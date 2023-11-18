import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './authentication/Login';
import { Home } from './home/home';
import { Codemstlist } from './mastermaintenance/codemst/codemstlist';
import { Nav } from './commons/Nav';
import { UsermstList } from './mastermaintenance/usermst/usermstlist';
import { Kanbanboard } from './dashboard/kanban';
import { IncidentList } from './incidentlist/incidentlist';
import { RecoilRoot } from 'recoil';
import MiniDrawer from './commons/Sidebar';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Nav/>
        <br></br>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/incidentlist" element={<IncidentList/>}></Route>
              <Route path="/kanbanboard" element={<Kanbanboard/>}></Route>
              <Route path="/codemstlist" element={<Codemstlist/>}></Route>
              <Route path="/usermstlist" element={<UsermstList/>}></Route>
            </Routes>      
          </BrowserRouter>
        </div>
      </div>
      
    </RecoilRoot>

  );
}

export default App;
