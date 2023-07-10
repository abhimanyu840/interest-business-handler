import Link from "next/link"

export default function Home() {
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
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <Link href="/customer/slug"><div className="flex cursor-pointer ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu">Details</div></Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Abhimanyu</td>
                    <td className="px-4 py-3">Self</td>
                    <td className="px-4 py-3">Patilhi,Senduari,Hajipur,Vaishali</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1000000</td>
                    <td className="px-4 py-3 text-lg text-gray-900">99999</td>
                    <td className="px-4 py-3 text-lg text-gray-900">12345</td>
                      <td className="flex  m-2 lg:w-2/3 w-full mx-auto text-sm">
                      <div className="flex ml-auto text-white bg-purple-900 text-sm border-0 p-2 px-6 focus:outline-none hover:bg-purple-600 rounded font-ubuntu"><Link href="/customer/slug">Open Details</Link></div>
                    </td>
                  </tr>
                  
                  

                </tbody>
              </table>
            </div>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}
