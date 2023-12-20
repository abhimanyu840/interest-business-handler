import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Redmoneymodal = ({ closeModal, customer }) => {
    const router = useRouter();
    const [rmoney, setRmoney] = useState()
    const [total, setTotal] = useState(customer.pamount - rmoney)

    useEffect(() => {
        setTotal(customer.pamount - rmoney)
    }, [rmoney])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "rmoney") {
            setRmoney(parseFloat(value) || 0)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rmoney <= 0) {
            toast.error("Please Enter A Valid Value ")
        } else {
            const data = {
                _id: customer._id,
                pamount: parseFloat(total),
                paidamount: parseFloat(-rmoney)
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
                <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">Reduce Money</div>
                <form onSubmit={handleSubmit} className="mx-4 p-3">
                    <div className="form-group mb-6">
                        <label htmlFor="cname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="cname" placeholder="Customer Name" readOnly={true} value={customer.cname} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="gname" className='form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold'>Guarantor Name</label>
                        <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Guarantor's Name" >{customer.gname}</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Previous Money</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" readOnly={true} value={customer.pamount} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="rmoney" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Reduce Money</label>
                        <input type="number" name="rmoney" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="rmoney" placeholder="Amount to be reduced" onChange={handleChange} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="total" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Total</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="total" placeholder="Total" onChange={handleChange} value={total} />
                    </div>
                    <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Update</button>
                </form>
            </div>
        </>
    )
}

export default Redmoneymodal