import Image from 'next/image'

import logo from '@/assets/logo.svg'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from 'react-icons/fa6'
import { Button } from '@nextui-org/react'
import { Bubble } from '@typebot.io/nextjs'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="bg-blackground" aria-labelledby="footer-heading">
                <Bubble
                    typebot="client-onboarding-l-squared"
                    previewMessage={{
                        message: 'Como podemos ajudar?',
                        autoShowDelay: 10000,
                        avatarUrl: 'https://www.lsquared.com.br/favicon.ico',
                    }}
                    theme={{ button: { backgroundColor: '#7fd5f8' } }}
                />
                <div className="px-5 py-12 mx-auto max-w-380 lg:py-16 md:px-12 lg:px-20">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="xl:col-span-1">
                            <Link
                                href="/"
                                className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-white tracking-relaxed lg:pr-8"
                            >
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="font-semibold leading-6 uppercase text-white">
                                        Mapa do Site
                                    </h3>
                                    <ul role="list" className="mt-4 space-y-3">
                                        <li>
                                            <Link
                                                href="/"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Início
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/sobre"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Sobre
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Serviços
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/contato"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Contato
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link
                                                href="/trabalhe-conosco"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Trabalhe Conosco
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="font-semibold leading-6 uppercase text-white">
                                        Serviços
                                    </h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Desenvolvimento Backend
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Desenvolvimento Frontend
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Automação de Processos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Softwares Desktop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Aplicativos Móveis
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/servicos"
                                                className="text-sm text-white hover:primary"
                                            >
                                                Integração com IA
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                                <div className="w-full mt-12 md:mt-0 justify-center flex">
                                    <Link href={'/contato'}>
                                        <Button
                                            color="primary"
                                            variant="shadow"
                                            size="lg"
                                        >
                                            ENTRE EM CONTATO
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
                    <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
                        <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
                            <div className="hidden text-white xl:flex gap-2 text-title-xl ">
                                <Link href="https://www.instagram.com/lsquaredds/">
                                    <FaInstagram className="hover:text-primary" />
                                </Link>

                                <Link href="https://www.facebook.com/profile.php?id=61555205385141">
                                    <FaFacebook className="hover:text-primary" />
                                </Link>

                                <Link href="https://twitter.com/LSquaredDS">
                                    <FaXTwitter className="hover:text-primary" />
                                </Link>

                                <Link href="https://www.linkedin.com/company/l-squared-digital-solutions">
                                    <FaLinkedin className="hover:text-primary" />
                                </Link>
                            </div>
                        </span>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <span className="mt-2 text-sm font-light text-white">
                            Copyright © 2023 - 2024
                            <span className="mx-2 text-primary hover:text-white">
                                Todos os Direitos Reservados
                            </span>
                            L-Squared
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
