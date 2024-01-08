'use client'

import Particles from '@tsparticles/react'
import configs from '@tsparticles/configs'

export default function ParticlesComponent(props: {
    id: string
    done: boolean
}) {
    console.log(JSON.stringify(configs.bubble))

    const myConfig = {
        name: 'Basic',
        particles: {
            fullScreen: { enable: false, zIndex: 0 },
            number: { value: 100, density: { enable: true } },
            color: {
                value: '#ff0000',
                animation: { enable: true, speed: 1, sync: true },
            },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: { enable: true, speed: 6 },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
            },
            modes: { repulse: { distance: 200 }, push: { quantity: 4 } },
        },
        background: { color: '' },
    }

    return props.done && <Particles id={props.id} options={myConfig} />
}
