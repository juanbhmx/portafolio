import './App.css';
import './css/styles.css'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Footer from './components/Footer';
import WhatsApp from './components/WpBtn'

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
      <WhatsApp/>
      <Footer/>
    </div>
    
  );
}

export default App;
