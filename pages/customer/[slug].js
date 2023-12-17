import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PayIntFineModal from '../../components/PayIntFineModal'
import Givemoneymodal from '../../components/Givemoneymodal'
import Redmoneymodal from '../../components/Redmoneymodal'
import Showhistorymodal from '../../components/Showhistorymodal'
import customers from '../../models/customers'
import mongoose from 'mongoose'

const Post = (customer) => {
    const router = useRouter()
    // const data = await getData()
    const { slug } = router.query
    // console.log(slug)
    const [payIntFineModal, setPayIntFineModal] = useState(false)
    const [giveMoneyModal, setGiveMoneyModal] = useState(false)
    const [reduceMoneyModal, setReduceMoneyModal] = useState(false)
    const [showHistoryModal, setShowHistoryModal] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        })
    }

    const calculateMonth = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const [id, setId] = useState(null);

        const startYear = start.getFullYear();
        const startMonth = start.getMonth();
        const endYear = end.getFullYear();
        const endMonth = end.getMonth();

        let monthDiff = (endYear - startYear) * 12 + (endMonth - startMonth);

        if (end.getDate() < start.getDate()) {
            monthDiff -= 1;
        }

        return monthDiff;

    }

    const calcFine = (month, interest) => {
        let fine = 0;
        for (let i = 1; i < month; i++) {
            fine += (interest * 10 * i) / 100
        }
        return fine;
    }


    return (
        <>
            <div id="top" className="container m-auto justify-center item-center p-4">
                {payIntFineModal && <PayIntFineModal closeModal={setPayIntFineModal} customer={customer.customer} calculateMonth={calculateMonth} calcFine={calcFine} />}
                {giveMoneyModal && <Givemoneymodal closeModal={setGiveMoneyModal} />}
                {reduceMoneyModal && <Redmoneymodal closeModal={setReduceMoneyModal} />}
                {showHistoryModal && <Showhistorymodal closeModal={setShowHistoryModal} />}
                <div className="block mx-auto p-4 md:p-6 rounded-lg shadow-lg bg-white w-full md:w-4/5">
                    <div className="text-center text-5xl underline p-1  text-purple-700 font-extrabold font-barlow">Customer Details</div>
                    {/* {customer.map((item) => {

                        return */}
                    <form >
                        <div className="form-group mb-6">
                            <label htmlFor="customername" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold my-3 md:my-0">Customer Name</label>
                            <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="customername" placeholder="Customer Name">{customer.customer.cname}
                            </span>
                            {/* {console.log(customer)} */}
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Gurranter Name</label>
                            <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Gurranter Name" >{customer.customer.gname}</span>
                        </div>
                        {/* <div className="form-group mb-6">
                            <label htmlFor="fname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Father's Name</label>
                            <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="Father's Name" >{customer.customer.fname}</span>
                        </div> */}
                        <div className="form-group mb-6">
                            <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Address</label>
                            <span type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" placeholder="Address" >{customer.customer.address}</span>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="date" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Date Taken</label>
                            <span type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="date" placeholder="Date Taken" >{new Date(customer.customer.date).toISOString().split('T')[0]}</span>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="paidtill" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Paid Till</label>
                            <span type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="paidtill" placeholder="Paid Till" >{new Date(customer.customer.paidtill).toISOString().split('T')[0]}</span>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="pamount" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Principal Amount</label>
                            <span type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pamount" placeholder="Principal Amount" >{customer.customer.pamount}</span>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Interest</label>
                            <span type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" >{(customer.customer.pamount * 5 * calculateMonth(customer.customer.paidtill)) / 100}</span>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="fine" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Fine</label>
                            <span type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fine" placeholder="Fine" > {calcFine(calculateMonth(customer.customer.paidtill), (customer.customer.pamount * 5) / 100)}</span>
                        </div>


                    </form>
                    {/* })} */}
                    <div>
                        <button onClick={() => { (setGiveMoneyModal(false) || setReduceMoneyModal(false) || setShowHistoryModal(false) || setPayIntFineModal(true)) || scrollToTop() }} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  mx-2 my-1.5">Pay Interest / Fine</button>

                        {/* <button onClick={()=>{setPayIntFineModal(true)}} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  mx-2 my-1.5">Pay Interest / Fine</button> */}

                        <button onClick={() => { setGiveMoneyModal(true) || setReduceMoneyModal(false) || setShowHistoryModal(false) || setPayIntFineModal(false) || scrollToTop() }} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  mx-2 my-1.5">Give Money</button>

                        <button onClick={() => { setGiveMoneyModal(false) || setReduceMoneyModal(true) || setShowHistoryModal(false) || setPayIntFineModal(false) || scrollToTop() }} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  mx-2 my-1.5">Reduce Money</button>

                        <button onClick={() => { setGiveMoneyModal(false) || setReduceMoneyModal(false) || setShowHistoryModal(true) || setPayIntFineModal(false) || scrollToTop() }} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  mx-2 my-1.5">Show History</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    // Fetch data from external API
    // const res = await fetch(`http://localhost:3000/api/fetchcustomer`)
    if (!mongoose.connections[0].readyState) {

        await mongoose.connect(process.env.MONGO_URI)
    }



    // let customer = await customers.find({'uid':'64aa8c5e0f098a522cf57789'})
    // let customer = await customers.find()
    let customer = await customers.findOne({ slug: context.query.slug })

    // console.log(customer.customer)

    // for (let cust in customer) {
    //     if (customer.includes(cust.customer)) {
    //         return customer
    //     }
    // }
    // let customerss;
    // if (customer) {
    //     customerss = customer
    //     return { props: { customer: JSON.parse(JSON.stringify(customerss)) } }
    // }
    // else {
    //     return customer = null;
    // }

    // // Pass data to the page via props
    return {
        props: { customer: JSON.parse(JSON.stringify(customer)) }
    }
}




export default Post