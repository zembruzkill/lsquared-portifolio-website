import TextSlider from '@/components/TextSlider'
import { FaDesktop, FaReact, FaMobile, FaRobot, FaBrain } from 'react-icons/fa6'
import { MdMiscellaneousServices, MdOutlineDesktopMac } from 'react-icons/md'

export default function OurServicesComponent() {
    return (
        <>
            <div className="bg-blackground items-center justify-center flex">
                <div className="w-full max-w-7xl justify-center items-center flex text-center">
                    <div className="container py-10 mx-auto">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 space-y-3 border-2 border-[#444] rounded-xl">
                                <span className="inline-block text-primary ">
                                    <FaReact className={'text-title-xl'} />
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize ">
                                    Devenvolvimento Frontend
                                </h1>

                                <p className="text-white font-[200]">
                                    Criamos interfaces envolventes e intuitivas,
                                    proporcionando experiências digitais
                                    memoráveis aos usuários. Utilizamos as mais
                                    recentes tecnologias para garantir que sua
                                    presença online seja impactante e eficaz.
                                </p>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-[#444] dark:border-[#444] rounded-xl">
                                <span className="inline-block text-primary dark:text-primary">
                                    <span className="inline-block text-primary ">
                                        <MdMiscellaneousServices
                                            className={'text-title-xl'}
                                        />
                                    </span>
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                                    Desenvolvimento Backend
                                </h1>

                                <p className="text-white font-[200]">
                                    Nos bastidores, construímos a espinha dorsal
                                    robusta do seu sistema, garantindo
                                    desempenho confiável e escalabilidade. Nossa
                                    abordagem eficiente assegura que sua
                                    aplicação funcione perfeitamente,
                                    independentemente da complexidade.
                                </p>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-[#444] dark:border-[#444] rounded-xl">
                                <span className="inline-block text-primary dark:text-primary">
                                    <MdOutlineDesktopMac
                                        className={'text-title-xl'}
                                    />
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                                    Softwares Desktop
                                </h1>

                                <p className="text-white font-[200]">
                                    Desenvolvemos softwares desktop
                                    personalizados que atendem às suas
                                    necessidades específicas. Da concepção à
                                    implementação, criamos soluções que otimizam
                                    suas operações e melhoram a eficiência do
                                    seu negócio.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 space-y-3 border-2 border-[#444] rounded-xl">
                                <span className="inline-block text-primary ">
                                    <FaMobile className={'text-title-xl'} />
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize ">
                                    Aplicativos Moveis
                                </h1>

                                <p className="text-white font-[200]">
                                    Criamos aplicativos móveis envolventes e
                                    funcionais, adaptados às plataformas iOS e
                                    Android. Sua presença móvel é aprimorada com
                                    designs intuitivos e recursos inovadores,
                                    garantindo uma conexão única com seu
                                    público-alvo.
                                </p>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-[#444] dark:border-[#444] rounded-xl">
                                <span className="inline-block text-primary dark:text-primary">
                                    <span className="inline-block text-primary ">
                                        <FaRobot className={'text-title-xl'} />
                                    </span>
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                                    Automação de Processos
                                </h1>

                                <p className="text-white font-[200]">
                                    Otimizamos suas operações através da
                                    automação de processos, reduzindo o tempo
                                    gasto em tarefas repetitivas. Nossa
                                    abordagem eficiente aumenta a produtividade
                                    e libera recursos para atividades
                                    estratégicas.
                                </p>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-[#444] dark:border-[#444] rounded-xl">
                                <span className="inline-block text-primary dark:text-primary">
                                    <FaBrain className={'text-title-xl'} />
                                </span>

                                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                                    Intergração com IA
                                </h1>

                                <p className="text-white font-[200]">
                                    Potencializamos suas soluções com integração
                                    inteligente de IA. Da análise de dados à
                                    automação inteligente, incorporamos
                                    tecnologias avançadas para impulsionar a
                                    eficiência e a inovação em seus processos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
