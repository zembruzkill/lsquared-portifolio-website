'use client'

import React, { use, useEffect } from 'react'
import { Standard } from '@typebot.io/nextjs'

interface ContactComponentProps {
    textColor: string
    maxWidth?: string
}

export default function ContactTypebotComponent({
    textColor,
    maxWidth = 'max-w-7xl',
}: ContactComponentProps) {
    return (
        <>
            <div className={`flex justify-center`}>
                <div className="justify-self-start">
                    <div className={`flex w-full p-4 ${maxWidth}`}>
                        <div id="#sobre" className="w-full space-y-4 ">
                            <p
                                className={`text-${textColor} text-title-sm font-[200]`}
                            >
                                ENTRE EM CONTATO
                            </p>
                            <h1
                                className={`text-${textColor} text-title-lg xl:text-title-xxl font-bold`}
                            >
                                Mande uma mensagem, adoraríamos conversar.
                            </h1>
                            <p
                                className={`text-${textColor} text-title-sm font-[200] pt-4`}
                            >
                                Quer entrar em contato? Utilize o formulário ou
                                os dados de contato abaixo para iniciar a
                                conversa. Nosso objetivo é responder a todas as
                                perguntas dentro de 24 horas.
                            </p>
                        </div>
                        <div className="hidden xl:block xl:w-1/3"></div>
                    </div>
                    <div className={`flex max-w-3xl p-4`}>
                        <Standard
                            typebot="client-onboarding-l-squared"
                            style={{ width: '100%', height: '600px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
