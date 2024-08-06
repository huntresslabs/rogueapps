import '../styles/globals.css';
import Head from 'next/head';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'RogueApps',
  description: 'RogueApps: when good OAuth apps go rogue.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'OAuth, security, rogue apps, Huntress',
  robots: 'index, follow',
  themeColor: '#00f49c',
  icons: {
    icon: 'https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/favicon.ico',
  },
  openGraph: {
    title: 'RogueApps',
    description: 'RogueApps: when good OAuth apps go rogue.',
    type: 'website',
    url: 'https://huntresslabs.github.io/rogueapps',
    image: 'https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg',
    siteName: 'RogueApps',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RogueApps',
    description: 'RogueApps: when good OAuth apps go rogue.',
    image: 'https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg',
    site: '@HuntressLabs',
    creator: '@HuntressLabs',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="theme-color" content={metadata.themeColor} />
        <link rel="icon" href={metadata.icons.icon} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <body>
        <Navbar />
        <div style={{ paddingTop: '5rem' }}>{/* To account for the fixed navbar height */}</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

