import logo from './logo.svg';
import './App.css';
import Addrecipe from './components/Addrecipe';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addrecipe/>} />
  <Route path='/s' element={<Search/>} />
  <Route path='/d' element={<Delete/>} />
  <Route path='/v' element={<Viewall/>} />
  </Routes>
  </BrowserRouter>

  );
}

export default App;
