import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PayIntFineModal from '../../components/PayIntFineModal'
import Givemoneymodal from '../../components/Givemoneymodal'
import Redmoneymodal from '../../components/Redmoneymodal'
import Showhistorymodal from '../../components/Showhistorymodal'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    const [payIntFineModal, setPayIntFineModal] = useState(false)
    const [giveMoneyModal, setGiveMoneyModal] = useState(false)
    const [reduceMoneyModal, setReduceMoneyModal] = useState(false)
    const [showHistoryModal, setShowHistoryModal] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        })
    }

    return (
        <>
            <div id="top" className="container m-auto justify-center item-center p-4">
                {payIntFineModal && <PayIntFineModal closeModal={setPayIntFineModal} />}
                {giveMoneyModal && <Givemoneymodal closeModal={setGiveMoneyModal} />}
                {reduceMoneyModal && <Redmoneymodal closeModal={setReduceMoneyModal} />}
                {showHistoryModal && <Showhistorymodal closeModal={setShowHistoryModal} />}
                <div className="block mx-auto p-4 md:p-6 rounded-lg shadow-lg bg-white w-full md:w-4/5">
                    <div className="text-center text-5xl underline p-1  text-purple-700 font-extrabold font-barlow">Customer Details</div>
                    <form>
                        <div className="form-group mb-6">
                            <label htmlFor="customername" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold my-3 md:my-0">Customer Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="customername" placeholder="Customer Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Gurranter Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Gurranter Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="fname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Father's Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="Father's Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="address" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Address</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" placeholder="Address" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="date" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Date Taken</label>
                            <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="date" placeholder="Date Taken" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="paidtill" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Paid Till</label>
                            <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="paidtill" placeholder="Paid Till" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="pamount" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Principal Amount</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pamount" placeholder="Principal Amount" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Interest</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="fine" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Fine</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fine" placeholder="Fine" />
                        </div>


                    </form>
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

export default Post