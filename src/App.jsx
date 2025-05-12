import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayouts';
import Home from './pages/Home';
import Courses from './pages/CoursesPage';
import Us from './pages/UsPage';
import Contact from './pages/ContactPage';
import Teacher from './pages/TeacherPage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cursos" element={<Courses />} />
          <Route path="/Nosotros" element={<Us />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Profesores" element={<Teacher />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
