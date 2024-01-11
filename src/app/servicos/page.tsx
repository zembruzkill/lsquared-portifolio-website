import Header from '@/components/layout/headers/Header'
import ListOfServicesComponent from '@/components/ListOfServicesComponent'

export default function Serviços() {
    return (
        <>
            <div className="min-h-screen bg-blackground items-center justify-center">
                <Header backgroundColor="transparent" />
                <div className="bg-blackground items-start justify-center xl:pt-12 flex">
                    <div className="w-full max-w-7xl z-100 justify-start pt-10">
                        <div className="flex justify-start">
                            <div className=" flex w-full space-y-6 p-8 xl:p-1">
                                <div className="xl:w-2/3">
                                    <h1 className="text-white text-title-lg xl:text-title-xxl font-bold">
                                        Nossos{' '}
                                        <span className="text-primary">
                                            Serviços
                                        </span>
                                    </h1>

                                    <p className="text-white font-bold text-title-xsm xl:text-title-sm text-start">
                                        Transformamos ideias em soluções
                                        digitais inovadoras para impulsionar o
                                        sucesso do seu negócio.
                                    </p>
                                </div>
                                <div className="hidden xl:w-1/3 xl:block"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListOfServicesComponent />
            </div>
            <div className="bg-black"></div>
        </>
    )
}
