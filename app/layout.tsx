import '../styles/globals.css';
import Head from 'next/head';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>RogueApps</title>
        <meta name="description" content="RogueApps: when good OAuth apps go rogue." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:card" content="summary_large_image" />
        <meta property="og:title" content="RogueApps" />
        <meta property="og:author" content="Huntress" />
        <meta property="og:description" content="RogueApps: when good OAuth apps go rogue." />
        <meta property="og:image" content="https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RogueApps" />
        <meta name="twitter:site" content="@HuntressLabs" />
        <meta name="twitter:creator" content="@HuntressLabs" />
        <meta name="twitter:description" content="RogueApps: when good OAuth apps go rogue." />
        <meta name="twitter:image" content="https://cdn.prod.website-files.com/655ddcc107aef728354e9c2a/655ddcc107aef728354e9cbf_Huntress-logo.svg" />
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