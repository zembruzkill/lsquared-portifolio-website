import TextSlider from '@/components/TextSlider'
import ListOfServicesComponent from '@/components/ListOfServicesComponent'
import { FaDesktop, FaReact, FaMobile, FaRobot, FaBrain } from 'react-icons/fa6'
import { MdMiscellaneousServices, MdOutlineDesktopMac } from 'react-icons/md'

export default function OurServicesComponent() {
    return (
        <>
            <div className="bg-blackground items-start justify-center xl:pt-12 flex pb-30 xl:pb-20">
                <div className="absolute max-w-full">
                    <TextSlider
                        services={[
                            {
                                label: 'SERVIÇOS',
                                alt: 'SERVIÇOS',
                            },
                            {
                                label: 'SERVIÇOS',
                                alt: 'SERVIÇOS',
                            },
                            {
                                label: 'SERVIÇOS',
                                alt: 'SERVIÇOS',
                            },
                        ]}
                    />
                </div>
                <div className="w-full max-w-7xl z-100 justify-start pt-10">
                    <div className="flex justify-start">
                        <div className="absolute flex w-full space-y-6 p-8 xl:p-1">
                            <div className="xl:w-2/3">
                                <h1 className="text-white text-title-lg xl:text-title-xxl font-bold">
                                    Nossos{' '}
                                    <span className="text-primary">
                                        Serviços
                                    </span>
                                </h1>

                                <p className="text-white font-bold text-title-xsm xl:text-title-sm text-start">
                                    Transformamos ideias em soluções digitais
                                    inovadoras para impulsionar o sucesso do seu
                                    negócio.
                                </p>
                            </div>
                            <div className="hidden xl:w-1/3 xl:block"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ListOfServicesComponent />
        </>
    )
}
