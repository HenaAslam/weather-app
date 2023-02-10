import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarComponent from './Components/NavbarComponent';

import Weather from './Components/Weather';
import  {BrowserRouter, Routes ,Route} from 'react-router-dom'
import NextFiveDetails from './Components/NextFiveDetails';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavbarComponent />
      <Routes>
     
      <Route element={ <Weather />} path="/"/>
      {/* <Route element={<NextFiveDetails/>} path="/details/:city"/> */}
      </Routes>
     
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
