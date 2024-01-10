import Image from 'next/image'
import Link from 'next/link'
import ImgSlider from '@/components/ImgSlider'
import favicon from '@/assets/favicon-primary.svg'

export default function AboutComponent() {
    return (
        <>
            <div className="min-h-screen items-start justify-center pt-20 space-y-20">
                <div className="items-center justify-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex w-full max-w-7xl p-4">
                            <div id="#sobre" className="w-full space-y-4">
                                <h1 className="text-black text-title-lg xl:text-title-xxl font-bold">
                                    Sobre nossa Empresa
                                </h1>
                                <div className="flex gap-2">
                                    <p className="text-black text-title-sm font-[200]">
                                        Bem vindo a L-SQUARED{' '}
                                    </p>
                                    <Image
                                        src={favicon}
                                        alt="favicon"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className="text-black text-title-sm font-[200] pt-4">
                                    Somos uma equipe apaixonada por
                                    desenvolvimento de software, dedicada a
                                    transformar ideias em soluções excepcionais.
                                    Na L-Squared, unimos criatividade e
                                    expertise técnica para fornecer serviços
                                    personalizados que impulsionam o sucesso dos
                                    nossos clientes. Estamos comprometidos com a
                                    qualidade, entrega pontual e colaboração
                                    contínua. Explore nossos serviços e descubra
                                    como podemos ajudar sua empresa a prosperar
                                    na era digital.
                                </p>
                                <p className="text-black text-title-sm pt-4 space-y-2">
                                    Preecisa de uma solução?{' '}
                                    <Link
                                        href={'/contato'}
                                        className="underline text-primary hover:text-black"
                                    >
                                        Vamos conversar!
                                    </Link>
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
