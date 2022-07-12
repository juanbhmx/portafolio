import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/montserrat';
import Profile from '../img/profile.png'
import emailjs from 'emailjs-com'
import { message } from 'antd';

const Contacto = () => {
    const enviarMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_41fscqc', 'template_5k36dyq', e.target, 'PoZsIOqDFJ1phgzY8').then(res => {
            // console.log(res.status)
            console.log(e.target)
            if (res.status == 200) {
                document.getElementById("enviacorreo").reset();
                message.success({
                    content: 'Mensaje Enviado',
                    className: 'custom-class',
                    style: {
                        marginTop: '50vh',
                    },
                });
            } else {
                message.error('Ha ocurrido un error!');
            }
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='nombreuser'>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <div className='bordeblanco'>
                                <div className='divmemo'>
                                    <img src={Profile} className='img-fluid rounded-top contact' alt='profile' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <form id="enviacorreo" onSubmit={enviarMail}>
                                <div className='col'>
                                    <h1 className='d-flex justify-content-center bold mt-4'>Contacto</h1>
                                </div>
                                <div class='col'>
                                    <label className='form-label'>Nombre</label>
                                    <input type='text' id='nombre' name='nombre' className='form-control' placeholder='Juan Bautista' aria-label='First name' required/>
                                </div>
                                <div class='col'>
                                    <label className='form-label'>Email</label>
                                    <input type='text' id='correo' name='correo' className='form-control' placeholder='Last name' aria-label='ejemplo@brocoli.mx' required/>
                                </div>
                                <div className='col'>
                                    <label className='form-label'>Mensaje</label>
                                    <textarea type='textarea' id='mensaje' name='mensaje' rows={4} className='form-control' placeholder='Escribe el mensaje' required/>
                                </div>
                                <div className='col mt-4 d-flex justify-content-center'>
                                    <input type='submit' className='btn btn-primary enviar' values='Enviar' />
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto