import ImgSlider from '@/components/ImgSlider'

import React from 'react'

interface ContactComponentProps {
    textColor: string
    maxWidth?: string
}

export default function ContactComponent({
    textColor,
    maxWidth = 'max-w-7xl',
}: ContactComponentProps) {
    return (
        <>
            <div className="items-start justify-center pt-20 space-y-20">
                <div className="items-center justify-center">
                    <div className="w-full flex justify-center items-center">
                        <div className={`flex w-full ${maxWidth} p-4`}>
                            <div id="#sobre" className="w-full space-y-4">
                                <h1
                                    className={`text-${textColor} text-title-lg xl:text-title-xxl font-bold`}
                                >
                                    Entre em Contato
                                </h1>
                                <p
                                    className={`text-${textColor} text-title-sm font-[200] pt-4`}
                                >
                                    Utilize o formulário ou os dados de contato
                                    abaixo para iniciar a conversa. Nosso
                                    objetivo é responder a todas as perguntas
                                    dentro de 24 horas.
                                </p>
                            </div>
                            <div className="hidden xl:block xl:w-1/3"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <ImgSlider />
                </div>
            </div>
        </>
    )
}
