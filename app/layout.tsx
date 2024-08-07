import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '../styles/globals.css';

export const metadata = {
  title: 'RogueApps',
  description: 'RogueApps: when good OAuth apps go rogue.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
