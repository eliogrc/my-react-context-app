import { Notificationprovider } from "./contexts/NotificationContext";
import NotificationButton from "./components/NotificationButton"
import Notification from "./components/Notification"

function App() {

  return (
    <Notificationprovider>
      <h1>💸 Transacción casi lista 💸</h1>
      <p>¿Estás seguro de que deseas completar esta transacción?</p>
      <NotificationButton />
      <Notification />
    </Notificationprovider>
  )
}

export default App
