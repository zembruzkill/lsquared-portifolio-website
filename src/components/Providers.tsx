'use client'

import React, { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'


const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SpeedInsights />
            <Analytics />
            <NextUIProvider>{children}</NextUIProvider>
        </>

    )
}

export default Providers
