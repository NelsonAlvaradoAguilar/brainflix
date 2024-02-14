
import './App.scss';
import Header from './components/Header/Header';
import UpLoadPage from './Pages/UpLoadPage/UpLoadPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homi from './Pages/HomePage/HomePage';
import NotFoundVideo from './components/NotFoundVideo/NotFoundVideo';
import HomePage from './Pages/HomePage/HomePage';


function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/videos/:videoId' element={<HomePage exact />} />
          <Route path='*' element={<NotFoundVideo />}  />
          <Route path='UpLoadPage' element={<UpLoadPage />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
