import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeaderMenu from './Components/HeaderMenu';
import Adds from './Components/Adds';
import MoviesLists from './Components/MoviesLists';
import Footer from './Components/Footer';

function App() {
  return (
   <div className="App">
      <div className="main"> 
        <Header/>
        <HeaderMenu/>
        <Adds/>
        <MoviesLists/>
        
      </div>
   </div>
  );
}

export default App;
