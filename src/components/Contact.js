import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/montserrat';
import Profile from '../img/profile.png'

const Contacto = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='nombreuser'>
                        <div className='bordeblanco'>
                            <div className='divmemo'>
                                <img src={Profile} className='img-fluid rounded-top contact' alt='profile'/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <h1 className='d-flex justify-content-center bold mt-4'>Contacto</h1>
                        </div>
                        <div class='col'>
                            <label className='form-label'>Nombre</label>
                            <input type='text' id='nombre' className='form-control' placeholder='Juan Bautista' aria-label='First name' />
                        </div>
                        <div class='col'>
                            <label className='form-label'>Email</label>
                            <input type='text' id='correo' className='form-control' placeholder='Last name' aria-label='ejemplo@brocoli.mx' />
                        </div>
                        <div className='col'>
                            <label  className='form-label'>Mensaje</label>
                            <textarea type='textarea' id='mensaje' rows={4} className='form-control' placeholder='Escribe el mensaje' />
                        </div>
                        <div className='col mt-4'>
                            <input type='submit' className='btn btn-primary enviar' values='Enviar'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto