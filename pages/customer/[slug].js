import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <div className="container m-auto justify-center p-4">
                <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white w-full md:w-4/5">
                    <div className="text-center text-5xl underline p-1 text-purple-700 font-extrabold font-barlow">Customer Details</div>
                    <form>
                        <div className="form-group mb-6">
                            <label for="customername" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Customer Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="customername" placeholder="Customer Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="gname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Gurranter Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="gname" placeholder="Gurranter Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="fname" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Father's Name</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fname" placeholder="Father's Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="address" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Address</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" placeholder="Address" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="date" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Date Taken</label>
                            <input type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="date" placeholder="Date Taken" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="pamount" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Principal Amount</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pamount" placeholder="Principal Amount" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="interest" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Interest</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interest" placeholder="Interest" />
                        </div>
                        <div className="form-group mb-6">
                            <label for="fine" className="form-label inline-block mb-2 text-gray-700 font-ubuntu font-semibold">Fine</label>
                            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fine" placeholder="Fine" />
                        </div>

                        <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Post