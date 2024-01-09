'use client'

import Particles from '@/components/Particles'
import TextSlider from '@/components/TextSlider'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { Engine } from '@tsparticles/engine'
import Headerr from '@/components/layout/headers/Header'
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
            <Headerr />
            <div className="min-h-screen bg-blackground items-center justify-center -mt-16">
                <Particles id={'particles'} done={init} />
                <div className="w-full flex justify-center items-center pb-20">
                    <div className="w-full items-center p-4 pt-40 max-w-7xl flex space-y-4">
                        <div className="pt-10">
                            <div className="flex items-center xl:w-1/2 gap-2">
                                <p className="text-white text-title-sm font-[200]">
                                    NÓS SOMOS A L-SQUARED{' '}
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
                                Uma empresa inovadora solucionando o digital
                                para você. Nossa sede fica em Porto Alegre - RS.
                                Atendendo a diversos clientes em território
                                nacional.
                            </p>
                            <Link href={'/contato'}>
                                <p className="text-white text-title-sm pt-4 space-y-2">
                                    Explore a excelência do digital, inicie a
                                    jornada da solução perfeita para você.{' '}
                                    <br />
                                    <button className="bg-primary rounded-lg p-4 hover:text-black">
                                        Quero a Perfeição!
                                    </button>
                                </p>
                            </Link>
                        </div>
                        <div className="xl:w-1/2"></div>
                    </div>
                </div>
                <TextSlider />
            </div>
            {/* <div className="w-full flex bg-home-session-background bg-cover bg-right bg-no-repeat min-h-screen items-start justify-center pt-20">
                <div className="w-full max-w-7xl">
                    <p className="text-title-xxl font-[700]">
                        Sobre a L-Squared Digital Solutions
                    </p>
                </div>
            </div> */}
        </>
    )
}
