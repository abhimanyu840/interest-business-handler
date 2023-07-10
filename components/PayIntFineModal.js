import React from 'react'

const PayIntFineModal = ({ closeModal }) => {
    return (
        <>
            <div className='container shadow-xl rounded-lg absolute min-w-5/6 align-center bg-white min-h-screen'>
                <div className='text-black font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo-tamma' onClick={() => closeModal(false)}>X</div>
                <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">Pay Interest/Pay Fine</div>
                <div className="mx-4 p-3">
                    <div className="form-group mb-6">
                        <label htmlFor="cname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="cname" placeholder="Customer Name" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="fname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Father's Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="Father's Name" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Interest</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="fine" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Fine</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fine" placeholder="Fine" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="total" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Total</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="total" placeholder="Total" />
                    </div>
                        <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Update</button>
                </div>
            </div>
        </>
    )
}

export default PayIntFineModal