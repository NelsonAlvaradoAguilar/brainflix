
import './App.scss';
import Header from './components/Header/Header';
import UpLoadPage from './Pages/UpLoadPage/UpLoadPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path='UpLoadPage' element={<UpLoadPage />}  />
          <Route path='*' element={<NotFoundVideo />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
