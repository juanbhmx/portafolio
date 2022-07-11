import './App.css';
import './css/styles.css'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Footer from './components/Footer';

// const colores = {
//   height: '850px',
//   background: '#16A085',
//   color: '#16a085',
//   lineHeight: '60px',
// }


function App() {
  
  return (
    <div className="App backgroundcolor">
      <NavBar/>
      <Welcome/>
      <Footer/>
    </div>
    
  );
}

export default App;
