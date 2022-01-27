import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Admin />}/>
      </Routes>
  );
}

export default App;
