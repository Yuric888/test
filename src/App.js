import { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './component/Logo/Logo';
import Search from './component/Search/Search';
import ListIcon from './component/ListIcon/ListIcon';


function App() {
 
  return (
    <div className="App">
      <Logo />
      <Search />
      <ListIcon />
    </div>
  );
}

export default App;
