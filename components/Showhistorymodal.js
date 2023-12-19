import React from 'react'

const Showhistorymodal = ({ closeModal, customer }) => {
    return (
    <>
    <div className='container shadow-xl rounded-lg absolute min-w-5/6 align-center bg-white min-h-screen'>
        <div className='text-black font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo-tamma' onClick={() => closeModal(false)}>X</div>
                <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">History</div>
                <div className="lg:w-4/5 w-full mx-auto overflow-auto">
                    <div className="m-2 p-2 text-center text-2xl font-baloo-tamma font-bold underline text-blue-700">Given Amount</div>

                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Given Amount</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(customer.paidamount)} */}
                            {customer.paidamount.map((item) => {

                                return <tr key={item._id}>
                                    {/* <tr> */}
                                    <td className='px-4 py-3'>{(item.amount > 0 && item.amount)}</td>
                                    {/* <td className='px-4 py-3'>lorem</td> */}
                                    <td className='px-4 py-3'>{item.amount > 0 && new Date(item.date).toISOString().split('T')[0]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-4/5 w-full mx-auto overflow-auto">
                    <div className="m-2 p-2 text-center text-2xl font-baloo-tamma font-bold underline text-blue-700">Returned Amount</div>

                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Returned Amount</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.paidamount.map((item) => {


                                return <tr key={item._id}>
                                    <td className='px-4 py-3'>{item.amount < 0 && item.amount}</td>
                                    <td className='px-4 py-3'>{item.amount < 0 && new Date(item.date).toISOString().split('T')[0]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-4/5 w-full mx-auto overflow-auto">
                    <div className="m-2 p-2 text-center text-2xl font-baloo-tamma font-bold underline text-blue-700">Paid Interest</div>

                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Paid Interest</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.paidinterest.map((item) => {
                                return <tr key={item._id}>
                                    <td className='px-4 py-3'>{item.amount}</td>
                                    <td className='px-4 py-3'>{new Date(item.date).toISOString().split('T')[0]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-4/5 w-full mx-auto overflow-auto">
                    <div className="m-2 p-2 text-center text-2xl font-baloo-tamma font-bold underline text-blue-700">Paid Fine</div>

                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Paid Fine</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.paidfine.map((item) => {
                                return <tr key={item._id}>
                                    <td className='px-4 py-3'>{item.amount}</td>
                                    <td className='px-4 py-3'>{new Date(item.date).toISOString().split('T')[0]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-4/5 w-full mx-auto overflow-auto">
                    <div className="m-2 p-2 text-center text-2xl font-baloo-tamma font-bold underline text-blue-700">Given Total</div>

                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Given Total</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.total.map((item) => {
                                
                            return <tr key={item._id}>
                                <td className='px-4 py-3'>{item.amount}</td>
                                <td className='px-4 py-3'>{new Date(item.date).toISOString().split('T')[0]}</td>
                            </tr>})}
                        </tbody>
                    </table>
                </div>

    </div>
</>
    )
}

export default Showhistorymodal