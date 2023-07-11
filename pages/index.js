import react from "react"
import Link from "next/link"
import customers from "../models/customers"
import mongoose from "mongoose"


const Home = ({ customer }) => {
  const today = Date()
  const calculateMonth = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

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
  console.log(calcFine(5, 50))



  const fetchUser = async () => {

    console.log('running')
  }


  return (
    <>
      <div className="container m-auto justify-center text-center">
        <h1 className="text-3xl font-extrabold mt-2 underline m-auto content-center text-center py-2 text-purple-800 font-baloo-tamma">
          Interest Business Handler
        </h1>
        <section className="text-gray-600 body-font">
          <div className="px-5 py-8 mx-auto">

            <div className="lg:w-4/5 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Customer Name</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Gurranter name</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Address</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Principal Amount</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Interest</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Fine</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {customer.map((item) => {


                    return <tr key={item._id}>
                      <td className="px-4 py-3">{item.cname}</td>
                      <td className="px-4 py-3">{item.gname}</td>
                      <td className="px-4 py-3">{item.address}</td>
                      <td className="px-4 py-3 text-lg text-gray-900">{item.pamount}</td>
                      <td className="px-4 py-3 text-lg text-gray-900">{(item.pamount * 5 * calculateMonth(item.paidtill)) / 100}</td>
                      {console.log('Month=', calculateMonth(item.paidtill), 'Fine=', calcFine(calculateMonth(item.paidtill), (item.pamount * 5) / 100), 'Int=', (item.pamount * 5) / 100)}
                      <td className="px-4 py-3 text-lg text-gray-900">{calcFine(calculateMonth(item.paidtill), (item.pamount * 5) / 100)}</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                        <Link href={`/customer/${item.slug}`}><div className="flex cursor-pointer ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu">Details</div></Link>
                    </td>
                    </tr>
                  })}




                </tbody>
              </table>
            </div>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={fetchUser}>Button</button>
            </div>
          </div>
        </section>

      </div>

    </>
    // This gets called on every request
  )
}
export const getServerSideProps = async (context) => {
  // Fetch data from external API
  // const res = await fetch(`http://localhost:3000/api/fetchcustomer`)
  if (!mongoose.connections[0].readyState) {

    await mongoose.connect(process.env.MONGO_URI)
  }
  let customer = await customers.find()
  // res.status(200).json({ customer })
  // const data = await res.json()

  // Pass data to the page via props
  return {
    props: { customer: JSON.parse(JSON.stringify(customer)) }
  }
}



export default Home
