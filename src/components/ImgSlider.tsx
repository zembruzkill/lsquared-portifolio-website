import Image from 'next/image'

export default function LogoCarousel() {
    const items = [
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/googleCertification_y6idmz_i1g3mx.png',
            alt: 'Google Partener Logo',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705615231/oracleDatabaseCertification_t4oyge_c85ikd.png',
            alt: 'Oracle Certified',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/iso9003_ilc5dz_v56a0s.png',
            alt: 'ISO',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/awsCertified_tno2tr_mkhpsj.png',
            alt: 'AWS Partener',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/gdpr_wkjio9_axvqak.png',
            alt: 'GRPD',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/awsCertifications_k1ibry_espsgr.png',
            alt: 'Aws Certified',
        },
        {
            src: 'https://res.cloudinary.com/doorwkexf/image/upload/v1705614907/blockchainCertification_vivlcq_xunv2a.png',
            alt: 'Blockchain',
        },
    ]

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] pb-8">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {items.map((item, index) => (
                    <li key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={150}
                            height={150}
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
                            width={150}
                            height={150}
                        ></Image>
                    </li>
                ))}
            </ul>
        </div>
    )
}
