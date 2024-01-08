import { Londrina_Outline } from 'next/font/google'

const londrina = Londrina_Outline({
    subsets: ['latin'],
    weight: ['400'],
})

import localFont from 'next/font/local'
const myFont = localFont({
    src: '../fonts/Alesand-Outline-Extra-Bold.ttf.woff',
    weight: '400',
})

export default function LogoCarousel() {
    const services = [
        { label: 'Desenvolvimento', alt: 'Desenvolvimento' },
        { label: 'Marketing', alt: 'Marketing' },
    ]

    return (
        <main className={myFont.className}>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {services.map((service, index) => (
                        <li key={index}>
                            <p className="text-[80px] xl:text-[150px] text-[#444] font-[200]">
                                {service.label.toUpperCase()}
                            </p>
                        </li>
                    ))}
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {services.map((service, index) => (
                        <li key={index}>
                            <p className="text-[80px] xl:text-[150px] text-[#444] font-[200]">
                                {service.label.toUpperCase()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
