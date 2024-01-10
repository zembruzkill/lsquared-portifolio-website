import TextSlider from '@/components/TextSlider'
import { FaDesktop, FaReact, FaMobile, FaRobot, FaBrain } from 'react-icons/fa6'
import { MdMiscellaneousServices, MdOutlineDesktopMac } from 'react-icons/md'

export default function StartAProject() {
    return (
        <>
            <div className="bg-[#0d0d0d] items-center justify-center flex">
                <div className="w-full max-w-7xl justify-center items-center text-start xl:pt-40 xl:pb-20 p-11">
                    <h1 className="text-white text-title-md xl:text-title-xxl font-bold capitalize">
                        Começe um projeto conosco
                    </h1>
                    <hr className="text-white mt-2 p-2" />

                    <p className="text-white font-[200] max-w-3xl">
                        Você possui um objetivo digital que gostaria de{' '}
                        <button className="underline">alcançar</button>? Está
                        pronto para descobrir como a L-Squared pode ajudar a{' '}
                        <button className="underline">
                            impulsionar o seu negócio
                        </button>
                        ? Se sim, entre em contato conosco hoje mesmo...
                    </p>
                </div>
            </div>
        </>
    )
}
