import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/montserrat";
import Html from '../img/html.png'
import Js from '../img/js.png'
import Css from '../img/css3.png'
// import Jquery from '../img/jq.webp'
import Php from '../img/php.png'
import Mysqlo from '../img/mysql.png'
import Node from '../img/node.webp'
import Reacto from '../img/react.png'

const Skills = () => {
    return(
        <>
            <div className='container'>
            <div className='html'>
                            <img src={Html} className="img-fluid rounded-top html5" alt="" />
                        </div>
                        <div className='js'>
                            <img src={Js} className="img-fluid rounded-top js" alt="" />
                        </div>
                        <div className='css'>
                            <img src={Css} className="img-fluid rounded-top css" alt="" />
                        </div>
                        {/* <div className='jq'>
                            <img src={Jquery} className="img-fluid rounded-top jq" alt="" />
                        </div> */}
                        <div className='php'>
                            <img src={Php} className="img-fluid rounded-top php" alt="" />
                        </div>
                        <div className='sql'>
                            <img src={Mysqlo} className="img-fluid rounded-top sql" alt="" />
                        </div>
                        <div className='node'>
                            <img src={Node} className="img-fluid rounded-top node" alt="" />
                        </div>
                        <div className='react'>
                            <img src={Reacto} className="img-fluid rounded-top react" alt="" />
                        </div>
            </div>
        </>
    )
}

export default Skills