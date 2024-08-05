import '../styles/globals.css';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

export const metadata = {
  title: 'RogueApps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=HK+Nova:wght@500;700;800&family=Visuelt:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/contribute" className={styles.navLink}>Contribute</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
