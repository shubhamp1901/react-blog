import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/create' element={<AddEditBlog />} />
        <Route path='/update/:id' element={<AddEditBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div> 
  );
}

export default App;
