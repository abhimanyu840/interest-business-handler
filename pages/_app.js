import Navbar from '../components/Navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, []);

  return <><LoadingBar
  color='#0000ff'
  progress={progress}
  waitingTime={400}
  onLoaderFinished={() => setProgress(0)}
/><Navbar/><Component {...pageProps} /></>
}

export default MyApp
