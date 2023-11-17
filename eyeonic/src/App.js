import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
