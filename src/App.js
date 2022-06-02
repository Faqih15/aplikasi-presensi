import logo from './logo.svg';
import './App.css';
import Gantiwarna from './pages/Gantiwarna';
import Acontoh from './pages/Acontoh';
import Hadir from './presensi/Hadir';
import User from './presensi/User';

function App() {
  return (
    <div className='grid grid-cols-2'>
      {/* <Gantiwarna /> */}
      {/* <Acontoh /> */}
      < Hadir />
      < User />

    </div>
  );
}

export default App;


// 