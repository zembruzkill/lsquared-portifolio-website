import Image from 'next/image'

export default function LogoCarousel() {
    const items = [
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704856835/googlepartner-bird3x_kf9dae.webp',
            alt: 'Google Partener Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704858791/digital-bird3x_xpawqw.webp',
            alt: 'Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704858928/goodfirms-bird3x_wjzp0o.webp',
            alt: 'Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704856835/trustpilot-bird3x_okxezl.webp',
            alt: 'Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704856835/clutch-bird3x_uaf9hq.webp',
            alt: 'Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1704856835/designrush-bird3x_uled23.webp',
            alt: 'Logo',
        },
    ]

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {items.map((item, index) => (
                    <li key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={200}
                            height={200}
                        ></Image>
                    </li>
                ))}
            </ul>
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
            >
                {items.map((item, index) => (
                    <li key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={200}
                            height={200}
                        ></Image>
                    </li>
                ))}
            </ul>
        </div>
    )
}
