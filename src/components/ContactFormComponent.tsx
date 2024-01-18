'use client'

import React, { use, useEffect } from 'react'
import { Input, Radio, RadioGroup, Textarea } from '@nextui-org/react'

interface ContactComponentProps {
    textColor: string
    maxWidth?: string
}

export default function ContactFormComponent({
    textColor,
    maxWidth = 'max-w-7xl',
}: ContactComponentProps) {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [selected, setSelected] = React.useState('outro')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value,
        })

        console.log(event.target.value)
        console.log(data)
    }

    const onSubmit = (event: React.SyntheticEvent) => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                // Handle the API response here
                console.log(result)
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error)
            })
    }

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
                        <form className="w-full" onSubmit={onSubmit}>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Seu Nome
                                    </label>
                                    <Input
                                        isRequired
                                        type="name"
                                        onChange={handleChange}
                                        label="Seu Nome Completo"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        is
                                        onChange={handleChange}
                                        label="Email"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4">
                                        Telefone
                                    </label>
                                    <Input
                                        type="phone"
                                        onChange={handleChange}
                                        label="Telefone"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-4">
                                <RadioGroup
                                    label="Onde você ouviu falar de nós?"
                                    orientation="horizontal"
                                    value={selected}
                                    onValueChange={setSelected}
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
                                    type="message"
                                    variant="bordered"
                                    onChange={handleChange}
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
