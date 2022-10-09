import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <div className='sticky top-0 backdrop-blur-3xl z-20'>
                <header className="text-gray-600 body-font shadow-md">
                    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row ">
                        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="md:ml-2 text-xl md:text-2xl font-extrabold text-blue-700 cursor-pointer block font-baloo-tamma ">Interest Business Handler</span>
                        </Link>
                        {/* <span className="block"><HiMenu/></span> */}
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <div className={`mx-2 mr-4 ${router.pathname==='/'?"font-extrabold text-blue-800":''} font-ubuntu font-semibold`}><Link href="/" className={`hover:text-gray-900`}>Home</Link></div>
                            {/* <div className={`mx-2 ${router.pathname==='/login'?"font-bold":''}`}><Link href="/login" className={`hover:text-gray-900`}>Login</Link></div> */}

                            <div className="flex cursor-pointer ml-auto text-white bg-red-900 text-sm border-0 p-1 py-1.5 px-4 focus:outline-none hover:bg-red-500 hover:text-gray-700 rounded font-ubuntu font-semibold"><Link href="/login">LogIn</Link></div>
                            {/* <div className="flex ml-auto text-white bg-red-900 text-sm border-0 p-1 py-1.5 px-4 focus:outline-none hover:bg-red-500 rounded"><Link href="/login">Logout</Link></div> */}
                        </nav>

                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar