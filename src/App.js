// import React from "react";
// import "./App.scss";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Header/Header";
// import MovieDetails from "./components/MovieDetails/MovieDetails";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/" element={<Home />}></Route>
//           <Route path="movie/:imdbID" element={<MovieDetails />}></Route>
//           <Route path="*" element={<PageNotFound />}></Route>
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router basename="/moviegeeks">
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/moviegeeks" element={<Home></Home>} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
