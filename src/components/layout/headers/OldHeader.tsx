'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import logo from '@/assets/logo.svg'

export default function Header() {
    return (
        <header className="bg-transparent z-[999999] sticky top-0">
            <nav className="bg-transparent px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-8xl">
                    <a href="/" className="flex items-center">
                        <Image src={logo} alt="logo" width={200} height={200} />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Link
                            href="/contato"
                            className="text-title-xsm xl:text-title-ssm bg-primary text-white rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >
                            ENTRE EM CONTATO
                        </Link>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-black"
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
                                <Link
                                    href="/contato"
                                    className="block py-2 pr-4 pl-3 text-white rounded  "
                                >
                                    CONTATO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/trabalhe-conosco"
                                    className="block py-2 pr-4 pl-3 text-white rounded  "
                                >
                                    TRABALHE CONOSCO
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <FloatingWhatsApp
                phoneNumber="+5551995506794"
                accountName="Luan"
                statusMessage="Usualmente responde em 1 hora!"
                chatMessage="Olá, como posso te ajudar?"
                placeholder="Digite uma mensagem..."
                avatar="https://media.licdn.com/dms/image/D5603AQH9LlhoEyiPnQ/profile-displayphoto-shrink_800_800/0/1704480551993?e=1710374400&v=beta&t=Pk8Ec7j7USZRRpbaJ7WbLcYvQRIwE9kjR5VMAekXeO4"
                darkMode={true}
                allowEsc
                notification
                notificationSound
            />
        </header>
    )
}
