'use client'

import Header from '@/components/layout/headers/Header'
import { useEffect, useRef, useState } from 'react'
import AboutComponent from '@/components/AboutComponent'
import Footer from '@/components/layout/footers/Footer'

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current as HTMLElement | null
            if (element) {
                const { top } = element.getBoundingClientRect()
                const isVisible = top < window.innerHeight
                setIsVisible(isVisible)
            }
        }

        window.addEventListener('scroll', onWindScroll)
        return () => {
            window.removeEventListener('scroll', onWindScroll)
        }
    }, [])

    const classes = `transition-opacity duration-3000
        ${isVisible ? 'opacity-100' : 'opacity-0'}`

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    )
}

export default function Sobre() {
    return (
        <>
            <div className="bg-blackground items-center justify-center">
                <Header backgroundColor="blackground" />
                <AboutComponent textColor="white" maxWidth="max-w-380" />
            </div>
            <Footer />
        </>
    )
}
