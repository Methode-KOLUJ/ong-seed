// components/SEO.jsx

export function DefaultSEO() {
  return {
    title: {
      default: 'ONG SEED - Notre site officiel', 
      template: ' ONG SEED | %s', 
    },
    description:
      'Bienvenue sur ONG SEED, la plateforme qui te propose du contenu exclusif et des fonctionnalités innovantes.', // 🔥 Description globale du site
    keywords: ['Enfance', 'Assistance', 'Aide', 'ONG SEED', 'ASBL', "Education", 'Solidarité'],
    metadataBase: new URL('https://www.ong-seed.com'), // 🔥 Lien de base de ton site
    authors: [{ name: 'ONG SEED', url: 'https://www.ong-seed.com' }],
    creator: 'ONG SEED', 
    publisher: 'ONG SEED',
    openGraph: {
      title: 'ONG SEED - Le site officiel',
      description: 'Bienvenue sur ONG SEED, la plateforme qui te propose du contenu exclusif et des fonctionnalités innovantes.',
      url: 'https://www.ong-seed.com',
      siteName: 'ONG SEED',
      images: [
        {
          url: 'https://www.ong-seed.com/og-image.jpg', // 🔥 Image Open Graph optimisée
          width: 1200,
          height: 630,
          alt: 'ONG SEED - Logo officiel',
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ONGSEED', // 🔥 Ton pseudo Twitter
      creator: '@ONGSEED',
      title: 'ONG SEED - Le site officiel',
      description: 'Bienvenue sur ONG SEED, la plateforme qui te propose du contenu exclusif et des fonctionnalités innovantes.',
      images: ['https://www.ong-seed.com/twitter-image.jpg'], 
    },
    icons: [
      { url: '/favicon/favicon-16x16.ico', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' }, //reste
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' }, //reste
      { url: '/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' }, //reste
    ],
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function SEO({ title, description }) {
  return {
    title,
    description,
  };
}