import React from 'react'

const Showhistorymodal = ({closeModal}) => {
  return (
    <>
    <div className='container shadow-xl rounded-lg absolute min-w-5/6 align-center bg-white min-h-screen'>
        <div className='text-black font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo-tamma' onClick={() => closeModal(false)}>X</div>
        <div className="m-2 p-2 text-center text-4xl font-baloo-tamma font-bold underline text-blue-900">History</div>
        <div className="mx-4 p-3">
            <div className="form-group mb-6">
                <label htmlFor="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Gurranter Name</label>
                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Gurranter Name" />
            </div>
            <div className="form-group mb-6">
                <label htmlFor="fname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Father's Name</label>
                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="Father's Name" />
            </div>
        </div>
    </div>
</>
  )
}

export default Showhistorymodal