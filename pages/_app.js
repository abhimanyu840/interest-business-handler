import Navbar from '../components/Navbar'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react'

function MyApp({ Component, pageProps }) {

  
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const [rel, setRel] = useState(2)
  const router = useRouter()

  useEffect(() => {
    // Get the UID from the local storage
    const storedId = localStorage.getItem("id");

    // Check if the UID is available
    if (storedId) {
      // Set the UID in cookies
      document.cookie = `id=${storedId}`;
      setRel(Math.random(100))
    } else {
      // If UID not available, redirect to the login page
      router.push("/login");
    }
  }, []);


  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if (token) {
      setUser({ value: token, id })
      setKey(Math.random())
    }
  }, [router.query]);
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setUser({ value: null })
    setKey(Math.random())
  }

  return <><LoadingBar
  color='#0000ff'
  progress={progress}
  waitingTime={400}
  onLoaderFinished={() => setProgress(0)}
  /><Navbar user={user} logout={logout} key={key} /><Component {...pageProps} user={user} key={rel} /></>
}

export default MyApp
