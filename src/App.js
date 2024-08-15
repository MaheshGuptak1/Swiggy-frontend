
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Firmitemspage from './Firmitemspage';
function App() {
  return (
    <>
       <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Landingpage/>}></Route>
      <Route path="/firmdata/:firmid/"  element={<Firmitemspage/>}></Route>
    </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;



