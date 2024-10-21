// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Solutions from './pages/Solutions';
// import Plans from './pages/Plans';
// import Resources from './pages/Resources';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import HeroSection from './components/HeroSection';
// import Board from './assets/Board';
// import Header from './assets/Header';
// import TemplateGallery from './assets/TemplateGallery';
// import List from './assets/List';
// import Card from './assets/Card';
// import Pricing from './components/Pricing';
// // import Workpages from './assets/Workpages';
// // import Board from './assets/Board';

// function App() {
//   return (
//     <Router> {/* Wrap everything inside Router */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/solutions" element={<Solutions />} />
//         <Route path="/plans" element={<Plans />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/board" element={<Board />} />
//         {/* <Route path="/board/new" element={<Board />} /> */}

//         <Route path="/header" element={<Header />} />
//         <Route path="/templategallery" element={<TemplateGallery />} />
//         <Route path="/list" element={<List />} />
//         <Route path="/herosection" element={<HeroSection />} />
//         <Route path="/card" element={<Card />} />
//         <Route path="/pricing" element={<Pricing />} />

//         {/* <Route path="/workpage" element={<Workpages />}/>
//         <Route path="/board/:_id" element={<Board />} /> */}


//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Plans from './pages/Plans';
// import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HeroSection from './components/HeroSection';
import Board from './assets/Board';
import Header from './assets/Header';
import TemplateGallery from './assets/TemplateGallery';
import List from './assets/List';
import Card from './assets/Card';
import Pricing from './components/Pricing';
function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/plans" element={<Plans />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/board" element={<Board />} /> */}
        <Route path="/board/new" element={<Board />} />

        <Route path="/header" element={<Header />} />
        <Route path="/templategallery" element={<TemplateGallery />} />
        <Route path="/list" element={<List />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/card" element={<Card />} />
        <Route path="/pricing" element={<Pricing />} />



      </Routes>
    </Router>
  );
}

export default App;
