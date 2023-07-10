import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');


    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } else if (e.target.name === 'cpassword') {
            setCpassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, password };
        console.log(data);
        if (password === cpassword) {
            const res = await fetch(`${process.env.HOST || 'http://localhost:3000'}/api/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            let response = await res.json();
            console.log(response);

            setName('');
            setEmail('');
            setPassword('');
            setCpassword('');

            if (response.success == 'success') {
                localStorage.setItem('token', response.token)
                console.log(localStorage, 'local')
                toast.success(`${response.success.toUpperCase()}! SIGNED UP`)
                if (response.token) {
                    setTimeout(() => {
                        toast.info('Redirecting to Homepage')
                    }, 800);
                    setTimeout(() => {
                        router.push('http://localhost:3000')
                    }, 1500);
                }
                else {
                    setTimeout(() => {
                        toast.info('Redirecting to Login Page')
                    }, 800);
                    setTimeout(() => {
                        router.push('http://localhost:3000/login')
                    }, 2000);

                }
            }
            else {
                toast.error(`FAILED! ${response.error.toUpperCase()}`)
            }
        }
        else {
            toast.error('Password and Confirm Password does not matches')
        }
    };

    return (
        <>
            <div className="container">
                <ToastContainer position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
                <section className="h-screen">
                    <div className="text-center text-4xl text-green-900 font-baloo-tamma underline font-bold mt-2 md:mt-4">SignUp</div>
                    <div className="px-6 h-full text-gray-800">
                        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="w-full"
                                    alt="Sample image"
                                />
                            </div>
                            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="form-label text-lg inline-block mb-1 text-gray-700 font-ubuntu font-semibold">Name</label>
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            value={name}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="form-label text-lg inline-block mb-1 text-gray-700 font-ubuntu font-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="email"
                                            name="email"
                                            placeholder="Email address"
                                            onChange={handleChange}
                                            value={email}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="password" className="form-label text-lg inline-block mb-1 text-gray-700 font-ubuntu font-semibold">Password</label>
                                        <input
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={password}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="cpassword" className="form-label text-lg inline-block mb-1 text-gray-700 font-ubuntu font-semibold">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="cpassword"
                                            name="cpassword"
                                            placeholder="Confirm Password"
                                            onChange={handleChange}
                                            value={cpassword}
                                        />
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <button
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Signup;
