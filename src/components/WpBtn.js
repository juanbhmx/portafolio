// import "./styles.css";
import ReactWhatsapp from "react-whatsapp";

import FloatingWhatsApp from "react-floating-whatsapp";
// import "react-floating-whatsapp/dist/index.css";
import Profile from '../img/profile.png'

export default function App() {
    return (
        <div className="App">
            {/* <ReactWhatsapp number="+905366030997" message="Hello World!!!" /> */}
            <FloatingWhatsApp phoneNumber="+528132246520"
                avatar={Profile}
                accountName="Juan Bautista"
                statusMessage="Online"
                chatMessage={"Hola!, ¿Como le puedo ayudar?"}
                darkMode="true"
                allowClickAway="true"
                notificationSound="true"
                notification="true"
            />
        </div>
    );
}
