import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './component/Logo/Logo';
import Search from './component/Search/Search';
import ListIcon from './component/ListIcon/ListIcon';
import {Data} from './Data'
import { useState } from 'react';
function App() {
const [name, setName] = useState('')
 const hanedleChane = (data) => {
  setName(data)
 }
  return (
    <div className="App">
      <div className="App__container">
        <Logo />
        <Search handle={hanedleChane} />
        <ListIcon data={Data} name={name} />
      </div>
    </div>
  );
}

export default App;
