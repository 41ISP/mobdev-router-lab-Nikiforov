import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import Layout from './components/Layout.jsx';

const App = () => {
return (
    <Routes>
      <Route path = "/" element={<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:id" element={<MoviePage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage/>} />
        <Route path="search" element={<SearchPage />}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
  </Routes>
  );
}
export default App
