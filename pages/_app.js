import Navbar from '../components/Navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query]);
  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
  }

  return <><LoadingBar
  color='#0000ff'
  progress={progress}
  waitingTime={400}
  onLoaderFinished={() => setProgress(0)}
  /><Navbar user={user} logout={logout} key={key} /><Component {...pageProps} /></>
}

export default MyApp
