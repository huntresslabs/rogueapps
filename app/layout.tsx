import '../styles/globals.css';
import Head from 'next/head';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'RogueApps',
  description: 'RogueApps: when good OAuth apps go rogue.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'https://huntresslabs.github.io/rogueapps/favicon.ico',
  },
  openGraph: {
    card: 'summary_large_image',
    title: 'RogueApps',
    author: 'Huntress',
    description: 'RogueApps: when good OAuth apps go rogue.',
    image: 'https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RogueApps',
    site: '@HuntressLabs',
    creator: '@HuntressLabs',
    description: 'RogueApps: when good OAuth apps go rogue.',
    image: 'https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:card" content={metadata.openGraph.card} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:author" content={metadata.openGraph.author} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
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
