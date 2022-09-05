import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './Footer';
// import Example from './Example';

import Header from './pages/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Login from './pages/Login';
import Error404 from './pages/Error_404';

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="news" element={<News />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Error404 />} />
          </Route>
      </Routes>
      </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div>
//       <Example />
//       <p>Hallo</p>
//       <Footer />
//     </div>
//   );
// }

export default App;
