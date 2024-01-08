'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'

export default function Header() {
    return (
        <header className="z-[999999]">
            <nav className="bg-transparent px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-8xl">
                    <a href="/" className="flex items-center">
                        {/* <Image src={logo} alt="logo" width={150} height={150} /> */}
                        <p className="text-white text-title-xl">L-SQUARED</p>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Link
                            href="/contato"
                            className="bg-primary text-white  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >
                            ENTRE EM CONTATO
                        </Link>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-whit"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pr-4 pl-3 text-white rounded "
                                    aria-current="page"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/sobre"
                                    className="block py-2 pr-4 pl-3 text-white rounded"
                                >
                                    SOBRE
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/servicos"
                                    className="block py-2 pr-4 pl-3 text-white rounded  "
                                >
                                    SERVIÇOS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/estudos-de-caso"
                                    className="block py-2 pr-4 pl-3 text-white rounded  "
                                >
                                    ESTUDOS DE CASO
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/contato"
                                    className="block py-2 pr-4 pl-3 text-white rounded  "
                                >
                                    CONTATO
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
