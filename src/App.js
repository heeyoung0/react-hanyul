import './App.css';
import { Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import About from './pages/About';
import Work from './pages/Work';
import Boodle from './pages/Boodle';
import Calming from './pages/Calming';
import Yuja from './pages/Yuja';
import Purecream from './pages/Purecream';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='about' element={<About />}/>
        <Route path='work' element={<Work />}/>
        <Route path='boodle' element={<Boodle />}/>
        <Route path='calming' element={<Calming />}/>
        <Route path='yuja' element={<Yuja />}/>
        <Route path='purecream' element={<Purecream />}/>
      </Routes>
    </div>
  );
}

export default App;
