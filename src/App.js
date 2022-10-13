import logo from './logo.svg';
import './App.css';

import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import DashBoard from './components/dashBoard/DashBoard';

function App() {
  return (
    <div className="container-scroller">
      <NavBar />
      <div className="container-fluid page-body-wrapper">
        <SideBar />
        <div class="main-panel">
          <div class="content-wrapper">
            <DashBoard/>
                  </div>
        </div>
      </div>
    </div>
  );
}


 

export default App

