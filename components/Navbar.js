import React, { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {HiMenu} from 'react-icons/hi'

const Navbar = ({ user,logout }) => {
    const router = useRouter();
    const ref = useRef();
    const handleClick = () => {
        logout()
        console.log('Handle Click is running')
    }
    const toggleClick = () => {
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('flex')
        }
        else if (ref.current.classList.contains('flex')) {
            ref.current.classList.remove('flex')
            ref.current.classList.add('hidden')
        }
    }



    return (
        <>
            <div className='sticky top-0 backdrop-blur-3xl z-20'>
                <header className="text-gray-600 body-font shadow-md">
                    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row ">
                        <div className='flex justify-between'>
                            <Link href="/" className="flex title-font font-medium md:items-center text-gray-900 mb-4 md:mb-0">
                            <span className="md:ml-2 text-xl md:text-2xl font-extrabold text-blue-700 cursor-pointer block font-baloo-tamma ">Interest Business Handler</span>
                            </Link><HiMenu ref={ref} className='text-3xl font-extrabold text-black mx-2 md:hidden' onClick={toggleClick} /></div>
                        <nav ref={ref} className="md:ml-auto hidden md:flex flex-col md:flex-row  items-center text-base justify-center" onClick={toggleClick}>
                            <div className={`mx-2 mr-4 ${router.pathname==='/'?"font-extrabold text-blue-800":''} font-ubuntu font-semibold`}><Link href="/" className={`hover:text-gray-900`}>Home</Link></div>
                            {/* <div className={`mx-2 ${router.pathname==='/login'?"font-bold":''}`}><Link href="/login" className={`hover:text-gray-900`}>Login</Link></div> */}

                            {!user.value && <Link href="/login"><div className="flex cursor-pointer mx-auto ml-auto text-white bg-red-900 text-sm border-0 p-1 py-1.5 mt-2.5 md:mt-0 px-4 md:mx-1 focus:outline-none hover:bg-red-500 hover:text-gray-700 rounded font-ubuntu font-semibold">LogIn</div></Link>}{
                                !user.value && <Link href="/signup"><div className="flex cursor-pointer mx-auto ml-auto text-white bg-red-900 text-sm border-0 p-1 py-1.5 mt-2.5 md:mt-0 px-4 md:mx-1 focus:outline-none hover:bg-red-500 hover:text-gray-700 rounded font-ubuntu font-semibold">SignUp</div></Link>}
                            {user.value && <div className="flex cursor-pointer mx-auto ml-auto text-white bg-red-900 text-sm border-0 p-1 py-1.5 mt-2.5 md:mt-0 px-4 md:mx-1 focus:outline-none hover:bg-red-500 hover:text-gray-700 rounded font-ubuntu font-semiboldS" onClick={handleClick}>Logout</div>
                            }

                        </nav>

                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar