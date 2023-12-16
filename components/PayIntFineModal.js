import React, { useState, useEffect } from 'react'

const PayIntFineModal = ({ closeModal, customer, calculateMonth, calcFine }) => {


    // let interest = (customer.pamount * 5 * calculateMonth(customer.paidtill)) / 100;
    // let fine = calcFine(calculateMonth(customer.paidtill), (customer.pamount * 5) / 100);

    const [interest, setInterest] = useState((customer.pamount * 5 * calculateMonth(customer.paidtill)) / 100);
    const [fine, setFine] = useState(calcFine(calculateMonth(customer.paidtill), (customer.pamount * 5) / 100));
    const [total, setTotal] = useState(interest + fine);

    useEffect(() => {
        // Update the total whenever interest or fine changes
        setTotal(interest + fine);
    }, [interest, fine]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'interest') {
            setInterest(parseFloat(value) || 0);
        } else if (name === 'fine') {
            setFine(parseFloat(value) || 0);
        }
    };

    return (
        <>
            <div className='container shadow-xl rounded-lg absolute min-w-5/6 align-center bg-white min-h-screen'>
                <div className='text-black font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo-tamma' onClick={() => closeModal(false)}>X</div>
                <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">Pay Interest/Pay Fine</div>
                <form className="mx-4 p-3" type="submit">
                    <div className="form-group mb-6">
                        <label htmlFor="cname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                        <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="cname" placeholder="Customer Name" > {customer.cname} </span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Guarantor's Name</label>
                        <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Father's Name" >{customer.gname}</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Interest</label>
                        <input type="number" name="interest" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" defaultValue={interest} contentEditable="true" onChange={handleChange} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="fine" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Fine</label>
                        <input type="number" name="fine" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fine" placeholder="Fine" defaultValue={fine} onChange={handleChange} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="total" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Total</label>
                        <input type="number" name='total' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="total" placeholder="Total" readOnly={true} value={total} onChange={handleChange} />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="paytill" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Pay Till</label>
                        <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="total" placeholder="Pay Till" />
                    </div>
                        <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Update</button>
                </form>
            </div>
        </>
    )
}

export default PayIntFineModal