'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/react'

import Image from 'next/image'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

import logo from '@/assets/logo.svg'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaXTwitter,
} from 'react-icons/fa6'

interface HeaderProps {
    backgroundColor: string
}

export default function Header({ backgroundColor }: HeaderProps) {
    const menuItems = [
        { label: 'INÍCIO', href: '/' },
        { label: 'SOBRE', href: '/sobre' },
        { label: 'SERVICOS', href: '/servicos' },
        { label: 'CONTATO', href: '/contato' },
        { label: 'TRABALHE CONOSCO', href: '/trabalhe-conosco' },
    ]
    return (
        <>
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
            <Navbar
                className={`bg-${backgroundColor}`}
                maxWidth="2xl"
                position="static"
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent>

                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarBrand>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <NavbarBrand>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={150}
                                height={150}
                            />
                        </Link>
                    </NavbarBrand>
                    <NavbarItem isActive>
                        <Link color="secondary" href="/" underline="hover">
                            INÍCIO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="secondary" href="/sobre" underline="hover">
                            SOBRE
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color="secondary"
                            href="/servicos"
                            underline="hover"
                        >
                            SERVIÇOS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color="secondary"
                            href="/contato"
                            underline="hover"
                        >
                            CONTATO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color="secondary"
                            href="trabalhe-conosco"
                            underline="hover"
                        >
                            TRABALHE CONOSCO
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <div className="hidden text-white xl:flex gap-2">
                        <NavbarItem>
                            <FaInstagram className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaFacebook className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaXTwitter className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaLinkedin className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                    </div>

                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="/contato"
                            variant="shadow"
                            size="lg"
                        >
                            ENTRE EM CONTATO
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className="bg-blackground text-white">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color="secondary"
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <div className="pb-4 pt-4 pr-4">
                        <hr className="" />
                    </div>
                    <div className=" text-white flex gap-2">
                        <NavbarItem>
                            <FaInstagram className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaFacebook className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaXTwitter className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                        <NavbarItem>
                            <FaLinkedin className="hover:text-primary text-title-md hover:text-title-lg" />
                        </NavbarItem>
                    </div>
                </NavbarMenu>
            </Navbar>
        </>
    )
}
