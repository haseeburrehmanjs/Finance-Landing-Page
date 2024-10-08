import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-black m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="https://t3.ftcdn.net/jpg/04/93/95/58/360_F_493955882_B66XJxn8mfivLZ8Du36XBmo2NLGSzk0i.jpg"
                                className="h-10 rounded-full"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Finenace
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://www.instagram.com/haseeburrehmanjs/" target="blank" className="hover:underline me-4 md:me-6">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://github.com/haseeburrehmanjs" className="hover:underline me-4 md:me-6">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="www.linkedin.com/in/kamranahmedjs" target='_blank' className="hover:underline me-4 md:me-6">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/haseeburrehmanjs" target="blank" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a target='_black' href="https://github.com/haseeburrehmanjs" className="hover:underline">
                            Haseeburrehmanjs™
                        </a> All Rights Reserved.
                    </span>
                </div>
            </footer>

        </>
    )
}

export default Footer
