'use client'

import Particles from '@tsparticles/react'
import configs from '@tsparticles/configs'

export default function ParticlesComponent(props: {
    id: string
    done: boolean
}) {
    const options = {
        name: 'Basic',
        particles: {
            fullScreen: { enable: true, zIndex: -1 },
            number: { value: 150, density: { enable: false } },
            color: {
                value: '#FFD64B',
                animation: {
                    enable: true,
                    speed: 1,
                    sync: true,
                },
            },
            shape: { type: 'rectangle' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: { enable: true, speed: 2 },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
            },
            modes: {
                repulse: { distance: 50 },
                push: { quantity: 4 },
            },
        },
        style: {
            position: 'absolute',
        },
        background: { color: '' },
    }

    return props.done && <Particles id={props.id} options={options} />
}
