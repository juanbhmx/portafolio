import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../img/profile.png'
import Html from '../img/html.png'
import Js from '../img/js.png'
import Css from '../img/css3.png'
// import Jquery from '../img/jq.webp'
import Php from '../img/php.png'
import Mysqlo from '../img/mysql.png'
import Node from '../img/node.webp'
import Reacto from '../img/react.png'
import "@fontsource/montserrat";



const App = () => {
    return (
        <>

            <div className='container'>
                <div className='row max-w-screen-lg mx-auto'>
                    <div className='col-md-6 nombreuser'>

                        <h5 className='small col-md-12'>Hola 👋, Soy</h5>
                        <h1 className='col-md-12 bold'>Juan Bautista</h1>
                        <h1 className='col-md-12 bold'>Hernández</h1>
                        <h5 className='small col-md-12'>Desarrollador FrontEnd</h5>
                        <h5 className='small col-md-12'>Apasionado por los proyectos que emprende.</h5>
                        <input name="" id="download" className='btn btn-light colorbtn mt-4' type="button" value="Descargar curriculum" />

                    </div>
                    <div className='col-md-6'>
                      
                        <div className='memoji'>
                            <img src={Profile} className="img-fluid rounded-top" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;