import './App.css'
import { RecoilRoot,useRecoilValue ,useRecoilState} from 'recoil'
import { networkAtom, TotalNotificationSelector } from './assets/atom'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const [networkNotificationsCount] = useRecoilState(networkAtom)
  const TotalNotificationsCount = useRecoilValue(TotalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>My Network({networkNotificationsCount.network >= 100 ? "99+" : networkNotificationsCount.network})</button>
      <button>Jobs({networkNotificationsCount.jobs >= 100 ? "99+" : networkNotificationsCount.jobs})</button>
      <button>Messaging({networkNotificationsCount.message >= 100 ? "99+" : networkNotificationsCount.message})</button>
      <button>Notifications({networkNotificationsCount.notifications >= 100 ? "99+" :networkNotificationsCount.notifications})</button>
      <button>Me({TotalNotificationsCount >= 1000 ? "1K+" : TotalNotificationsCount })</button>
    </>
  )
}

export default App
