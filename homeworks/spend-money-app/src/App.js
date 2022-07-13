import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Profile from './components/Profile';
import Receipt from './components/Receipt';
import TotalPrice from './components/TotalPrice';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Profile />
        <TotalPrice />
        <Products />
        <Receipt />
      </div>
    </>
  );
}

export default App;
