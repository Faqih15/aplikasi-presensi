import './App.css';
import Daftar from './presensi/Daftar';
import Hadir from './presensi/Hadir';

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2' >
      < Hadir />
      < Daftar />
    </div>
  );
}

export default App;


// className='grid grid-cols-2'