import FloatingWhatsApp from "react-floating-whatsapp";
import Profile from '../img/profile.png'

export default function App() {
    return (
        <div className="App">
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
