'use client'

import Particles from '@/components/Particles'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { Engine } from '@tsparticles/engine'
import Header from '@/components/layout/headers/Header'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegSquareFull } from 'react-icons/fa6'

import favicon from '@/assets/favicon-primary.svg'

export default function Home() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    return (
        <>
            <Header />
            <div className="min-h-screen bg-blackground items-center justify-center">
                <Particles id={'particles'} done={init} />
                <div className="w-full flex justify-center items-center">
                    <div className="w-full items-center p-4 pt-40 xl:p-40 flex space-y-4">
                        <div className="pt-10">
                            <div className="flex items-center xl:w-1/2 gap-2">
                                <p className="text-white text-title-sm font-[200]">
                                    NÓS SOMOS L-SQUARED{' '}
                                </p>
                                <Image
                                    src={favicon}
                                    alt="favicon"
                                    width={25}
                                    height={25}
                                />
                            </div>

                            <p className="text-title-xl xl:text-title-xxl text-white font-[700]">
                                Soluções digitais de <br />
                                <span>
                                    <TypeAnimation
                                        sequence={[
                                            'Desenvolvimento 🖥️',
                                            2000, // Waits 2s
                                            'Marketing 🚀',
                                            2000, // Waits 2s
                                            'Design 🎨',
                                            2000, // Waits 1ss
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                    />
                                </span>
                            </p>

                            <p className="text-white text-title-xsm font-[200] pt-4">
                                Uma agência de marketing digital que oferece um
                                amplo espectro de soluções digitais. Nossa sede
                                fica em Porto Alegre - RS, com clientes em
                                vários locais do Brasil.
                            </p>
                            <Link href={'/contato'}>
                                <p className="text-white text-title-sm pt-4">
                                    Quer entrar em contato?{' '}
                                    <span className="text-primary underline">
                                        Vamos conversar
                                    </span>
                                </p>
                            </Link>
                        </div>
                        <div className="xl:w-1/2"></div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full flex bg-white min-h-screen items-start justify-center pt-20">
                <div className="w-full max-w-7xl">
                    <p className="text-title-xxl font-[700]">Quem Somos?</p>
                    <p className="justify-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                </div>
            </div> */}
        </>
    )
}
