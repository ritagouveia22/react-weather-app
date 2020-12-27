import SearchEngine from "./SearchEngine"
import Header from "./Header"
import Details from "./Details"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <SearchEngine />
          <Header />
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
