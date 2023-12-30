import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const CreateCustomer = () => {
    const [customerName, setCustomerName] = useState('');
    const [guarantorName, setGuarantorName] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    var slugify = require('slugify')
    const slugword = customerName + address + Date.now();
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = slugify(slugword, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
            locale: 'vi',      // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
        })
        const uid = localStorage.getItem('id')
        let pamount = Number.parseInt(amount)
        let paidtill = date;
        const data = { uid, cname: customerName, gname: guarantorName, address, pamount, paidamount: [{ amount: parseFloat(pamount), date: new Date() }], slug, date, paidtill }
        if (data) {
            const res = await fetch(`${process.env.HOST || 'https://interestbusinesshandler.netlify.app'}/api/createcustomer`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            let response = await res.json();
            // console.log(response);
            if (response.success == 'success') {
                toast.success('Customer Succesfully Added')
                setTimeout(() => {
                    router.push('https://interestbusinesshandler.netlify.app')
                }, 1500);
            }
            else {
                toast.error('OOPs! Some Error Occured')
            }

        } else {
            toast.error("Please Enter The Data")
        }
        // Handle form submission here
        // console.log('Form submitted');
        // console.log('Customer Name:', customerName);
        // console.log('Guarantor Name:', guarantorName);
        // console.log('Address:', address);
        // console.log('Amount:', amount);
        // console.log('Date:', date);
        // console.log('Slug:', slug);
        // slugify('some string', '_')
        // Reset form fields
        setCustomerName('');
        setGuarantorName('');
        setAddress('');
        setAmount('');
        setDate('');


    };

    return (
        <div>
            <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">Add Customer</div>
            <div className="mx-4 p-3">
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <label htmlFor="customerName" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                        <input
                            type="text"
                            id="customerName"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Customer Name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="guarantorName" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Guarantor Name</label>
                        <input
                            type="text"
                            id="guarantorName"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Guarantor Name"
                            value={guarantorName}
                            onChange={(e) => setGuarantorName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Address</label>
                        <input
                            type="text"
                            id="address"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="amount" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="date" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Date</label>
                        <input
                            type="date"
                            id="date"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded">Create Customer</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomer;
