'use client'

import React from 'react'
import { Input, Radio, RadioGroup, Textarea } from '@nextui-org/react'

interface ContactComponentProps {
    textColor: string
    maxWidth?: string
}

export default function ContactFormComponent({
    textColor,
    maxWidth = 'max-w-7xl',
}: ContactComponentProps) {
    return (
        <>
            <div className={`flex justify-center`}>
                <div className="justify-self-center">
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
                    <div className={`flex w-full ${maxWidth} p-4`}>
                        <form className="w-full">
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Seu Nome
                                    </label>
                                    <Input
                                        type="nome"
                                        label="Seu Nome Completo"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Email
                                    </label>
                                    <Input type="email" label="Email" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Telefone
                                    </label>
                                    <Input type="telefone" label="Telefone" />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-4">
                                <RadioGroup
                                    label="Onde você ouviu falar de nós?"
                                    orientation="horizontal"
                                >
                                    <Radio value="google">
                                        Busca do Google
                                    </Radio>
                                    <Radio value="facebook">Facebook</Radio>
                                    <Radio value="instagram">Instagram</Radio>
                                    <Radio value="linkedin">Linkedin</Radio>
                                    <Radio value="tiktok">TikTok</Radio>
                                    <Radio value="indicacão">Indicacão</Radio>
                                    <Radio value="outro">Outro</Radio>
                                </RadioGroup>
                            </div>
                            <div className="flex flex-wrap mb-4">
                                <Textarea
                                    label="Mensagem"
                                    variant="bordered"
                                    placeholder="Escreva sua mensagem aqui..."
                                    disableAnimation
                                    disableAutosize
                                    classNames={{
                                        base: 'w-full',
                                        input: 'resize-y min-h-[200px]',
                                    }}
                                />
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <button className="bg-primary w-full text-white rounded-md p-6">
                                    Enviar Formulário
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
