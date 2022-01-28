import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>}/>
        <Route path="create" element={<CreateBlog />}/>
        <Route path="login" element={<Admin />}/>
        <Route path="admin" element={<Admin />}/>
        
      </Routes>
  );
}

export default App;
