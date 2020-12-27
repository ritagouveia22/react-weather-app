import SearchEngine from "./SearchEngine"
import Header from "./Header"
import Details from "./Details"
import Footer from "./Footer"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <SearchEngine />
          <Header />
          <Details />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
