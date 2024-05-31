
import './App.css';

import { Link ,Outlet } from 'react-router-dom';
import Coursesroute from './Coursesroute';
function App() {
  return (
    <div className="App">
      <h1>Online courses details</h1>
     <Link to="Coursesroute"> Courses</Link>
     <Outlet></Outlet>

     
    </div>
  );
}

export default App;
