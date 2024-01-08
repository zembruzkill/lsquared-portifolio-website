import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/*', '/api/*', '/auth/*', 'admin'],
        },
        sitemap: 'https://lsquared.com.br/sitemap.xml',
    }
}
