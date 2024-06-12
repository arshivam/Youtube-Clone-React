import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='flex mt-[65px]'>
        <SideBar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
