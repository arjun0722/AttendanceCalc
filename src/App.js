
import Attendance from './Component/Attendance/Attendance';
import Staff from './Component/AddStaff/Staff';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Component/Redux/Store';

import './App.css';

function App() {
  return (
    <div className="App">

<Provider store={Store}>
<Routes>
  <Route path='/' element={<Staff/>}/>
  <Route path='/attendance' element={<Attendance/>}/>
 
</Routes>
</Provider>


   
    </div>
  );
}

export default App;
