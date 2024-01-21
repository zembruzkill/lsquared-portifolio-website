import './globals.css'
import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'

const roboto = Readex_Pro({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'L-Squared Digital Solutions',
    description: 'Conectando a solução ideal pro seu negócio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Providers>{children}</Providers>
            </body>
            <Analytics />
        </html>
    )
}
