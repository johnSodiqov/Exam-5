import { Outlet } from 'react-router-dom';
import './App.css';
import SideBar from './componets/sideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header row w-100">
        <div className='col-3 p-0'>
        <SideBar />
        </div>
        <div className='col-9 p-0'>
        <Outlet/>
        </div>
      </header>
    </div>
  );
}

export default App;
