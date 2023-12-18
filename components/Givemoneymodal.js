import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Givemoneymodal = ({ closeModal, customer }) => {

    const router = useRouter();
    const [amoney, setAmoney] = useState()
    const [total, setTotal] = useState(customer.pamount + amoney)
    useEffect(() => {
        setTotal(customer.pamount + amoney)
    }, [amoney])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'amoney') {
            setAmoney(parseFloat(value) || 0)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (amoney <= 0) {
            toast.error("Please Enter A Valid Value")
        } else {
            const data = {
                _id: customer._id,
                pamount: parseFloat(total),
                paidamount: parseFloat(amoney)
            }
            try {
                const res = await fetch(`${process.env.HOST || 'http://localhost:3000'}/api/updatecustomer`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const response = await res.json();

                if (response.success === 'success') {
                    toast.success('Updated Successfully');

                    setTimeout(() => {
                        router.push('http://localhost:3000');
                        toast.info('Redirecting to Home Page');
                    }, 1500);
                } else {
                    toast.error('Oops! Some Error Occurred');
                }
            } catch (error) {
                console.error('Error updating customer:', error);
                toast.error('Oops! Some Error Occurred');
            }
        }
    }


    return (
        <>
            <div className='container shadow-xl rounded-lg absolute min-w-5/6 align-center bg-white min-h-screen'>
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className='text-black font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo-tamma' onClick={() => closeModal(false)}>X</div>
                <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">Give Money</div>
                <form onSubmit={handleSubmit} className="mx-4 p-3">
                    <div className="form-group mb-6">
                        <label htmlFor="cname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                        <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="cname" placeholder="Customer Name" >{customer.cname}</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Guarantor's Name</label>
                        <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Guarantor's Name" >{customer.gname}</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Previous Money</label>
                        <span type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" >{customer.pamount}</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="amoney" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Add Money</label>
                        <input type="number" name="amoney" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="amoney" placeholder="Add Money" onChange={handleChange} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="total" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Total</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="total" placeholder="Total" value={total} onChange={handleChange} />
                    </div>
                    <button type="submit" className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Update</button>
                </form>
            </div>
        </>
    )
}

export default Givemoneymodal