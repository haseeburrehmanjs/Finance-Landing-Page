import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div
                    className="container mx-auto flex flex-wrap p-5 items-center justify-between"
                    bis_skin_checked={1}
                >
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://t3.ftcdn.net/jpg/04/93/95/58/360_F_493955882_B66XJxn8mfivLZ8Du36XBmo2NLGSzk0i.jpg" alt="" className='w-12 h-12 rounded-full' />
                        <span className="ml-3 text-xl text-white">Finenace</span>
                    </a>
                    <nav className="flex-wrap items-center justify-center sm:flex hidden text-white">
                        <a className="mr-5 hover:text-sky-500">Home</a>
                        <a className="mr-5 hover:text-sky-500">About us</a>
                        <a className="mr-5 hover:text-sky-500">Contact us</a>
                    </nav>
                    <button className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                                Login
                            </button>
                </div>
            </header>

        </>
    )
}

export default Navbar
