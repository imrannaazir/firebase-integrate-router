import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Log from './components/Log/Log';
import Sign from './components/Sign/Sign';
import Products from './components/Products/Products';


//component body
function App() {
  return (
    <div className="App bg-[#fafafa] h-screen">

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Log />} />
        <Route path='/signup' element={<Sign />} />
        <Route path='/products' element={<Products />} />

      </Routes>

    </div>
  );
}

export default App;
