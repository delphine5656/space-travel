
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from '../src/Routes/Home'
import Pricing from './Routes/Pricing';
import Trainings from './Routes/Trainings';
import Contact from './Routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/training' element={<Trainings/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
