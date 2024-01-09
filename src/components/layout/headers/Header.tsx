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

import logo from '@/assets/logo.svg'

export default function Header() {
    const menuItems = [
        { label: 'INÍCIO', href: '/' },
        { label: 'SOBRE', href: '/sobre' },
        { label: 'SERVICOS', href: '/servicos' },
        { label: 'CONTATO', href: '/contato' },
        { label: 'TRABALHE CONOSCO', href: '/trabalhe-conosco' },
    ]
    return (
        <>
            <Navbar className="bg-blackground" maxWidth="2xl">
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent>

                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarBrand>
                        <Image src={logo} alt="logo" width={200} height={200} />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <NavbarBrand>
                        <Image src={logo} alt="logo" width={150} height={150} />
                    </NavbarBrand>
                    <NavbarItem isActive>
                        <Link href="/" color="secondary">
                            INÍCIO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/sobre"
                            color="secondary"
                            aria-current="page"
                        >
                            SOBRE
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="secondary" href="/servicos">
                            SERVIÇOS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="secondary" href="/contato">
                            CONTATO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="secondary" href="trabalhe-conosco">
                            TRABALHE CONOSCO
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="/contato"
                            variant="shadow"
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
                </NavbarMenu>
            </Navbar>
        </>
    )
}
