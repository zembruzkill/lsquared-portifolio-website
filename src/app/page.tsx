'use client'

import Particles from '@/components/Particles'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { Engine } from '@tsparticles/engine'
import Header from '@/components/layout/headers/Header'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { FaRegSquareFull } from 'react-icons/fa6'

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
            <div className="min-h-screen bg-white items-center justify-center">
                <Header />
                <Particles id={'particles'} done={init} />
                <div className="w-full flex justify-center items-center">
                    <div className="w-full items-center p-4 pt-40 xl:p-40 flex space-y-4">
                        <div>
                            <div className="flex items-center xl:w-1/2 gap-2">
                                <p className="text-black text-title-sm font-[200]">
                                    NÓS SOMOS L-SQUARED{' '}
                                </p>
                                <span className="text-primary text-title-sm font-[200]">
                                    <FaRegSquareFull />
                                </span>
                            </div>

                            <p className="text-title-xl xl:text-title-xxl text-black font-[700]">
                                Uma inovadora Agência de <br />
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

                            <p className="text-black text-title-xsm font-[200] pt-4">
                                Uma agência de marketing digital que oferece um
                                amplo espectro de soluções digitais. Nossa sede
                                fica em Porto Alegre - RS, com clientes em
                                vários locais do Brasil.
                            </p>
                            <Link href={'/contato'}>
                                <p className="text-black text-title-sm pt-4">
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
            <div className="bg-black"></div>
        </>
    )
}
