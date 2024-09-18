import {Routes,Route} from 'react-router-dom'

import HomePage from './pages/home';
import Roompage from './pages/room';

function App() {
  return (
      <Routes>
       <Route path="/" element ={<HomePage/>}/>
       <Route path="/room/:roomId" element={<Roompage/>}/>

      </Routes>
  );
}

export default App;
