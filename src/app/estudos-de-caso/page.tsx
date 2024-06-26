import Header from '@/components/layout/headers/Header'

export default function EstudosDeCaso() {
    return (
        <>
            <div className="min-h-screen bg-blackground items-center justify-center">
                <Header backgroundColor="transparent" />
                <div className="w-full flex justify-center items-center pt-32">
                    <h1 className="text-white text-title-xxl">
                        Estudos de Caso
                    </h1>
                </div>
            </div>
            <div className="bg-black"></div>
        </>
    )
}
