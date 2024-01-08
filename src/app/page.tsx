'use client'

import styles from './page.module.css'
import Particles from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Engine } from '@tsparticles/engine'
import Header from '@/components/layout/headers/Header'
import Link from 'next/link'
import { FaRegSquareFull } from 'react-icons/fa6'

export default function Home() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    return (
        <>
            <Particles
                className="absolute w-4 h-full"
                id="tsparticles"
                style={{}}
                options={{
                    name: 'Basic',
                    particles: {
                        fullScreen: { enable: false, zIndex: 0 },
                        number: { value: 100, density: { enable: true } },
                        color: {
                            value: '#ff0000',
                            animation: {
                                enable: true,
                                speed: 1,
                                sync: true,
                            },
                        },
                        shape: { type: 'circle' },
                        opacity: { value: 0.5 },
                        size: { value: { min: 1, max: 3 } },
                        links: {
                            enable: true,
                            distance: 150,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1,
                        },
                        move: { enable: true, speed: 6 },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: 'repulse' },
                            onClick: { enable: true, mode: 'push' },
                        },
                        modes: {
                            repulse: { distance: 200 },
                            push: { quantity: 4 },
                        },
                    },
                    background: { color: '' },
                }}
            />
            <div className="min-h-screen bg-blackground items-center justify-center">
                <Header />
                <div className="w-full flex justify-center items-center">
                    <div className="w-full p-4 xl:p-40 flex space-y-4">
                        <div>
                            <div className="flex items-center w-1/2 gap-2">
                                <p className="text-white text-title-sm font-[200]">
                                    NÓS SOMOS L-SQUARE{' '}
                                </p>
                                <span className="text-primary text-title-sm font-[200]">
                                    <FaRegSquareFull />
                                </span>
                            </div>

                            <p className="text-title-xl xl:text-title-xxl text-white font-[700]">
                                Uma inovadora Agência de Desenvolvimento e
                                Marketing Digital
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
                        <div className="w-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
